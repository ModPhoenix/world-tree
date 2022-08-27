import { Stack } from '@mui/material';

import { ListViewItem } from './ListViewItem';

export function ListView() {
  return (
    <section aria-label="Graph: List View">
      <Stack spacing={2}>
        <ListViewItem name="Root" content="Root node of World Tree" />
      </Stack>
    </section>
  );
}
