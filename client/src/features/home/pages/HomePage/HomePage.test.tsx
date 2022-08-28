import { MockedProvider } from '@apollo/client/testing';

import { render, screen } from 'test';

import { HomePage } from '.';

describe('<HomePage />', () => {
  it('renders with necessary components', () => {
    render(
      <MockedProvider>
        <HomePage />
      </MockedProvider>,
    );

    expect(
      screen.getByRole('region', { name: /list view/i }),
    ).toBeInTheDocument();
  });
});
