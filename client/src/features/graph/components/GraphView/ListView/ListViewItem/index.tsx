import { Box, Chip, Link, Stack, Typography } from '@mui/material';
import { generatePath } from 'react-router-dom';

import { KnowledgeNodeFragment } from 'api';
import { Links } from 'settings';

import { NodeMenu } from '../../../../components';

interface ListViewItemProps {
  name: string;
  content: string;
  children: KnowledgeNodeFragment[];
}

export function ListViewItem({ name, content, children }: ListViewItemProps) {
  return (
    <article aria-labelledby="node-name" data-testid="node">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href={generatePath(Links.node.page.index, { name })}>
          <Typography id="node-name" variant="h5" component="h2">
            {name}
          </Typography>
        </Link>
        <NodeMenu nodeName={name} />
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
            href={generatePath(Links.node.page.index, { name: child.name })}
          />
        ))}
      </Stack>
    </article>
  );
}
