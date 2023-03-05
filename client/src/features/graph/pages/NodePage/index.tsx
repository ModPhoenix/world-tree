import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { generatePath, Link, useParams } from 'react-router-dom';

import { useNodeQuery } from 'api';
import { PageLayout } from 'components';
import { Links, ROOT_NODE_ID } from 'settings';
import {
  NodeFromQuery,
  NodeContextFromQuery,
  NodeParentFromQuery,
} from 'types';

import { Breadcrumb, Breadcrumbs, ListView, NodeMenu } from '../../components';

function getBreadcrumbs(
  context: NodeContextFromQuery,
  node: NodeFromQuery | undefined,
  parent: NodeParentFromQuery,
): [Breadcrumb[], Breadcrumb[]] {
  const breadcrumbs: Breadcrumb[] = [];
  const siblings: Breadcrumb[] = [];

  const reverseContext = [...context].reverse();

  reverseContext.forEach((node) => {
    breadcrumbs.push({
      label: node.name,
      href: generatePath(Links.node.page.index, { id: node.id }),
    });
  });

  if (node) {
    breadcrumbs.push({
      label: node.name,
      href: generatePath(Links.node.page.index, { id: node.id }),
    });
  }

  if (parent) {
    parent.children.forEach((child) => {
      if (child.name !== node?.name) {
        siblings.push({
          label: child.name,
          href: generatePath(Links.node.page.index, { id: child.id }),
        });
      }
    });
  }

  return [breadcrumbs, siblings];
}

export function NodePage(): JSX.Element {
  const { id = ROOT_NODE_ID } = useParams();
  const { data: { node } = {} } = useNodeQuery({
    variables: {
      where: { id },
    },
  });

  const [breadcrumbs, siblings] = getBreadcrumbs(
    node?.context ?? [],
    node,
    node?.parent,
  );

  return (
    <PageLayout>
      <Stack spacing={2}>
        <Breadcrumbs breadcrumbs={breadcrumbs} siblings={siblings} />
        <article aria-labelledby="node-name" data-testid="node">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="node-name" variant="h5" component="h1">
              {node?.name}
            </Typography>
            {node ? <NodeMenu nodeName={node.name} nodeId={node.id} /> : null}
          </Box>
          <Typography data-testid="nodeContent">{node?.content}</Typography>

          {node?.meanings?.length ?? 0 > 0 ? (
            <Typography variant="h6" component="h4" my={2}>
              Meanings
            </Typography>
          ) : null}
          <ul>
            {node?.meanings.map((node) => (
              <li key={node.id}>
                <Link to={generatePath(Links.node.page.index, { id: node.id })}>
                  {node.name} -{' '}
                  {node.context.map((node) => node.name).join(' > ')}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <ListView parentNodeId={node?.id} />
      </Stack>
    </PageLayout>
  );
}
