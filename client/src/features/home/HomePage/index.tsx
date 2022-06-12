import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

import { useUsersQuery } from 'api';

export function HomePage(): ReactElement {
  const { data, loading, error } = useUsersQuery();

  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
    </div>
  );
}
