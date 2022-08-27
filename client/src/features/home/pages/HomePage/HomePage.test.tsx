import { render, screen } from 'test';

import { HomePage } from '.';

describe('<HomePage />', () => {
  it('renders with necessary components', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('region', { name: /list view/i }),
    ).toBeInTheDocument();
  });
});
