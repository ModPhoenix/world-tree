import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useKnowledgeCreateMutation } from 'api';

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

  const parentNode = 'Root';

  const onSubmit = async (values: AddNodeFormValues) => {
    await knowledgeCreateMutation({
      variables: {
        input: {
          parents: {
            connect: [
              {
                where: {
                  node: {
                    name: parentNode,
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
        <NodeForm parentNode={parentNode} onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
}
