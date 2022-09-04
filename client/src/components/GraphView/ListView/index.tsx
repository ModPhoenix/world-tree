import { Stack } from '@mui/material';

import { useKnowledgesQuery } from 'api';
import { ROOT_NODE } from 'settings';

import { ListViewItem } from './ListViewItem';

export function ListView() {
  const { data } = useKnowledgesQuery({
    variables: {
      where: { name: ROOT_NODE },
    },
  });

  const [root] = data?.knowledges ?? [];

  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        {root?.children.map((knowledge) => (
          <ListViewItem
            key={knowledge.id}
            name={knowledge.name}
            content={knowledge.content}
            children={knowledge.children}
          />
        ))}
      </Stack>
    </section>
  );
}
