import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useKnowledgeCreateMutation } from 'api';
import { ROOT_NODE } from 'settings';

import { NodeForm } from '../../components';

interface AddNodeFormValues {
  name: string;
  content: string;
}

export function AddNodePage(): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const [knowledgeCreateMutation] = useKnowledgeCreateMutation({
    onCompleted() {
      enqueueSnackbar('Node created', { variant: 'success' });
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
                    name: ROOT_NODE,
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
        <NodeForm parentNode={ROOT_NODE} onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
}
