import { Stack } from '@mui/material';

import { useKnowledgesQuery } from 'api';

import { ListViewItem } from './ListViewItem';

export function ListView() {
  const { data } = useKnowledgesQuery();

  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        {data?.knowledges.map((knowledge) => (
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
