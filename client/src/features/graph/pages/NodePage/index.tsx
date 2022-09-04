import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { generatePath, useParams } from 'react-router-dom';

import { useKnowledgesQuery } from 'api';
import { PageLayout } from 'components';
import { Links } from 'settings';
import { KnowledgeFromQuery, KnowledgeParentFromQuery } from 'types';

import { Breadcrumb, Breadcrumbs } from '../../components';

function getBreadcrumbs(
  parent: KnowledgeParentFromQuery | undefined,
  node: KnowledgeFromQuery | undefined,
): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = [];

  if (parent) {
    breadcrumbs.push({
      label: parent.name,
      href: generatePath(Links.node.page.index, { name: parent.name }),
    });
  }

  if (node) {
    breadcrumbs.push({
      label: node.name,
      href: generatePath(Links.node.page.index, { name: node.name }),
    });
  }

  return breadcrumbs;
}

export function NodePage(): JSX.Element {
  const { name } = useParams();
  const { data } = useKnowledgesQuery({
    variables: {
      where: { name },
    },
  });

  const [node] = data?.knowledges ?? [];
  const [parent] = node?.parents ?? [];

  const breadcrumbs = getBreadcrumbs(parent, node);

  return (
    <PageLayout>
      <Stack spacing={2}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <article aria-labelledby="node-name" data-testid="node">
          <Typography id="node-name" variant="h5" component="h1">
            {name}
          </Typography>
          <Typography data-testid="nodeContent">{node?.content}</Typography>
        </article>
      </Stack>
    </PageLayout>
  );
}
