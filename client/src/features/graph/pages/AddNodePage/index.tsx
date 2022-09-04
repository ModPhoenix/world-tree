import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';

import { useKnowledgeCreateMutation } from 'api';
import { CREATE_NODE_PARENT_SEARCH_PARAM, Links, ROOT_NODE } from 'settings';

import { NodeForm } from '../../components';

interface AddNodeFormValues {
  name: string;
  content: string;
}

export function AddNodePage(): JSX.Element {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [searchParams] = useSearchParams();
  const parentName =
    searchParams.get(CREATE_NODE_PARENT_SEARCH_PARAM) || ROOT_NODE;

  const [knowledgeCreateMutation] = useKnowledgeCreateMutation({
    onCompleted(data) {
      const [node] = data.createKnowledges.knowledges;

      if (node) {
        enqueueSnackbar('Node created', { variant: 'success' });
        navigate(
          generatePath(Links.node.page, {
            name: node.name,
          }),
        );
      }
    },
    onError(error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    },
    refetchQueries: ['Knowledges'],
  });

  const onSubmit = async (values: AddNodeFormValues) => {
    await knowledgeCreateMutation({
      variables: {
        input: {
          parents: {
            connect: [
              {
                where: {
                  node: {
                    name: parentName,
                  },
                },
              },
            ],
          },
          name: values.name,
          content: values.content,
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
