import { ReactElement } from 'react';

import { PageLayout } from 'components';
import { ListView } from 'features';

export function HomePage(): ReactElement {
  return (
    <PageLayout>
      <ListView />
    </PageLayout>
  );
}
