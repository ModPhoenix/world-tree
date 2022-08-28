import { MockedProvider } from '@apollo/client/testing';

import { render, screen } from 'test';

import { ListView } from '.';

describe('<ListView />', () => {
  it('renders correctly', () => {
    render(
      <MockedProvider>
        <ListView />
      </MockedProvider>,
    );

    expect(
      screen.getByRole('region', { name: /list view/i }),
    ).toBeInTheDocument();
  });
});
