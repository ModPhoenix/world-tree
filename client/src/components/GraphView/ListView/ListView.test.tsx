import { render, screen } from 'test';

import { ListView } from '.';

describe('<ListView />', () => {
  it('renders correctly', () => {
    render(<ListView />);

    expect(
      screen.getByRole('region', { name: /list view/i }),
    ).toBeInTheDocument();
  });
});
