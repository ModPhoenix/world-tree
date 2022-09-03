import { LoadingButton } from '@mui/lab';
import { Alert } from '@mui/material';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';

import { TextFieldControl } from 'components';

interface NodeFormValues {
  name: string;
  content: string;
}

interface NodeFormProps {
  parentNode: string;
  defaultValues?: NodeFormValues;
  onSubmit: (values: NodeFormValues) => void;
}

const emptyForm: NodeFormValues = {
  name: '',
  content: '',
};

export function NodeForm({
  parentNode,
  defaultValues = emptyForm,
  onSubmit,
}: NodeFormProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NodeFormValues>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Alert>Parent Node: {parentNode}</Alert>
        <TextFieldControl
          control={control}
          name="name"
          label="Name"
          rules={{ required: 'Name is required' }}
        />
        <TextFieldControl
          control={control}
          name="content"
          label="Content"
          rules={{ required: 'Content is required' }}
          multiline
          minRows={6}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loadingPosition="center"
          loading={isSubmitting}
        >
          Add Node
        </LoadingButton>
      </Stack>
    </form>
  );
}
