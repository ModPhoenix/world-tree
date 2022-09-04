import { Link, Typography } from '@mui/material';
import { generatePath } from 'react-router-dom';

import { Links } from 'settings';

interface ListViewItemProps {
  name: string;
  content: string;
}

export function ListViewItem({ name, content }: ListViewItemProps) {
  return (
    <article aria-labelledby="node-name" data-testid="node">
      <Link href={generatePath(Links.node.page, { name })}>
        <Typography id="node-name" variant="h5" component="h2">
          {name}
        </Typography>
      </Link>
      <Typography data-testid="nodeContent">{content}</Typography>
    </article>
  );
}
