import { Stack } from '@mui/material';

import { useKnowledgesQuery } from 'api';

import { ListViewItem } from './ListViewItem';

export function ListView() {
  const { data } = useKnowledgesQuery({
    variables: {
      where: { name: 'Root' },
    },
  });

  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        {data?.knowledges[0].children.map((knowledge) => (
          <ListViewItem
            key={knowledge.id}
            name={knowledge.name}
            content={knowledge.content}
          />
        ))}
      </Stack>
    </section>
  );
}
