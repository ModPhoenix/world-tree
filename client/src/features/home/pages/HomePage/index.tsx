import { ReactElement } from 'react';

import { ListView, PageLayout } from 'components';

export function HomePage(): ReactElement {
  return (
    <PageLayout>
      <ListView />
    </PageLayout>
  );
}
