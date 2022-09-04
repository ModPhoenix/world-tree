import { Chip, Link, Stack, Typography } from '@mui/material';
import { generatePath } from 'react-router-dom';

import { KnowledgeNodeFragment } from 'api';
import { Links } from 'settings';

interface ListViewItemProps {
  name: string;
  content: string;
  children: KnowledgeNodeFragment[];
}

export function ListViewItem({ name, content, children }: ListViewItemProps) {
  return (
    <article aria-labelledby="node-name" data-testid="node">
      <Link href={generatePath(Links.node.page.index, { name })}>
        <Typography id="node-name" variant="h5" component="h2">
          {name}
        </Typography>
      </Link>
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
