import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';

import { useCreateNodeMutation } from 'api';
import { CREATE_NODE_PARENT_SEARCH_PARAM, Links, ROOT_NODE_ID } from 'settings';

import { NodeForm, NodeFormValues } from '../../components';

export function AddNodePage(): JSX.Element {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [searchParams] = useSearchParams();
  const parentName =
    searchParams.get(CREATE_NODE_PARENT_SEARCH_PARAM) || ROOT_NODE_ID;

  const [createNodeMutation] = useCreateNodeMutation({
    onCompleted({ createNode: node }) {
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
    await createNodeMutation({
      variables: {
        input: {
          parentId: parentName,
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
          Add Node
        </Typography>
        <NodeForm parentNode={parentName} onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
}
