import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { useUpdateNodeMutation, useNodeQuery } from 'api';
import { Links, ROOT_NODE_ID } from 'settings';

import { NodeForm, NodeFormValues } from '../../components';

export function UpdateNodePage(): JSX.Element {
  const { id = ROOT_NODE_ID } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data: { node } = {} } = useNodeQuery({
    variables: {
      where: { id },
    },
  });

  const defaultValues = {
    name: node?.name ?? '',
    content: node?.content ?? '',
  };

  const [updateNodeMutation] = useUpdateNodeMutation({
    onCompleted({ updateNode: node }) {
      enqueueSnackbar('Node created', { variant: 'success' });
      navigate(
        generatePath(Links.node.page.index, {
          id: node.id,
        }),
      );
    },
    onError(error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    },
    refetchQueries: ['Node'],
  });

  const onSubmit = async (values: NodeFormValues) => {
    await updateNodeMutation({
      variables: {
        input: {
          id: node?.id ?? '',
          name: values.name.trim(),
          content: values.content.trim(),
        },
      },
    });
  };

  return (
    <Grid container maxWidth={600} m="200px auto">
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Update Node
        </Typography>
        <NodeForm
          parentNode={node?.name ?? ''}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        />
      </Grid>
    </Grid>
  );
}
