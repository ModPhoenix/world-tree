import { Box, Chip, Link, Stack, Typography } from '@mui/material';
import { generatePath } from 'react-router-dom';

import { NodeDataFragment } from 'api';
import { Links } from 'settings';

import { NodeMenu } from '../../..';

interface ListViewItemProps {
  id: string;
  name: string;
  content: string;
  children: NodeDataFragment[];
}

export function ListViewItem({
  id,
  name,
  content,
  children,
}: ListViewItemProps) {
  return (
    <article aria-labelledby="node-name" data-testid="node">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href={generatePath(Links.node.page.index, { id })}>
          <Typography id="node-name" variant="h5" component="h2">
            {name}
          </Typography>
        </Link>
        <NodeMenu nodeId={id} nodeName={name} />
      </Box>
      <Typography data-testid="nodeContent" gutterBottom>
        {content}
      </Typography>
      <Stack spacing={2} direction="row">
        {children.map((child) => (
          <Chip
            key={child.id}
            label={child.name}
            component={Link}
            href={generatePath(Links.node.page.index, { id: child.id })}
          />
        ))}
      </Stack>
    </article>
  );
}
