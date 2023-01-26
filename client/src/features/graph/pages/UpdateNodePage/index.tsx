import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { useUpdateNodeMutation, useNodeQuery } from 'api';
import { Links } from 'settings';

import { NodeForm, NodeFormValues } from '../../components';

export function UpdateNodePage(): JSX.Element {
  const { name } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data: { node } = {} } = useNodeQuery({
    variables: {
      where: { name },
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
          name: node.name,
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
        id: node?.id ?? '',
        name: values.name.trim(),
        content: values.content.trim(),
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
