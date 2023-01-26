import { Stack } from '@mui/material';

import { useNodeQuery } from 'api';
import { ROOT_NODE } from 'settings';

import { ListViewItem } from './ListViewItem';

interface ListViewProps {
  parentNodeName?: string;
}

export function ListView({
  parentNodeName = ROOT_NODE,
}: ListViewProps): JSX.Element {
  const { data } = useNodeQuery({
    variables: {
      where: {
        name: parentNodeName,
      },
    },
  });

  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        {data?.node?.children.map((node) => (
          <ListViewItem
            key={node.id}
            id={node.id}
            name={node.name}
            content={node.content}
            children={node.children}
          />
        ))}
      </Stack>
    </section>
  );
}
