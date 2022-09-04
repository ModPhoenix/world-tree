import { Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { useUpdateKnowledgesMutation, useKnowledgesQuery } from 'api';
import { Links } from 'settings';

import { NodeForm, NodeFormValues } from '../../components';

export function UpdateNodePage(): JSX.Element {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { name } = useParams();
  const { data } = useKnowledgesQuery({
    variables: {
      where: { name },
    },
  });

  const [node] = data?.knowledges ?? [];

  const [updateKnowledgesMutation] = useUpdateKnowledgesMutation({
    onCompleted(data) {
      const [node] = data.updateKnowledges.knowledges;

      if (node) {
        enqueueSnackbar('Node created', { variant: 'success' });
        navigate(
          generatePath(Links.node.page.index, {
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

  const onSubmit = async (values: NodeFormValues) => {
    await updateKnowledgesMutation({
      variables: {
        where: {
          name,
        },
        update: {
          name: values.name,
          content: values.content,
        },
      },
    });
  };

  const defaultValues = {
    name: node?.name ?? '',
    content: node?.content ?? '',
  };

  return (
    <Grid container maxWidth={600} m="200px auto">
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Update Node
        </Typography>
        <NodeForm
          parentNode={node?.name}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        />
      </Grid>
    </Grid>
  );
}
