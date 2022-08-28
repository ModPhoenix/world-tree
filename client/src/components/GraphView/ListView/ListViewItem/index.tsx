import { Typography } from '@mui/material';

interface ListViewItemProps {
  name: string;
  content: string;
}

export function ListViewItem({ name, content }: ListViewItemProps) {
  return (
    <article aria-labelledby="node-name" data-testid="node">
      <Typography id="node-name" variant="h5" component="h2">
        {name}
      </Typography>
      <Typography data-testid="nodeContent">{content}</Typography>
    </article>
  );
}
