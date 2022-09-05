import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { generatePath, useParams } from 'react-router-dom';

import { useKnowledgesQuery } from 'api';
import { PageLayout } from 'components';
import { Links, ROOT_NODE } from 'settings';
import { KnowledgeFromQuery, KnowledgeParentFromQuery } from 'types';

import { Breadcrumb, Breadcrumbs, ListView, NodeMenu } from '../../components';

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
  const { name = ROOT_NODE } = useParams();
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="node-name" variant="h5" component="h1">
              {name}
            </Typography>
            {node ? <NodeMenu nodeName={node.name} /> : null}
          </Box>
          <Typography data-testid="nodeContent">{node?.content}</Typography>
        </article>
        <ListView parentNodeName={name} />
      </Stack>
    </PageLayout>
  );
}
