import { styled } from '@mui/material';
import { ReactElement } from 'react';

import { ListView } from 'components';

const PageLayout = styled('div')`
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(10)}`};
`;

export function HomePage(): ReactElement {
  return (
    <PageLayout>
      <ListView />
    </PageLayout>
  );
}
