import { render, screen } from 'test';

import { ListViewItem } from '.';

describe('<ListViewItem />', () => {
  it('renders correctly', () => {
    const nodeName = 'Chaos';
    render(<ListViewItem name={nodeName} content="Root node of World Tree" />);

    expect(screen.getByTestId('node')).toBeInTheDocument();
    expect(
      screen.getByRole('article', {
        name: nodeName,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: nodeName,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('nodeContent')).toHaveTextContent(
      'Root node of World Tree',
    );
  });
});
