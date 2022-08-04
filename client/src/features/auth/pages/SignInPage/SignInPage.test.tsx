import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SignInPage } from '.';

describe('<SignInPage />', () => {
  it('renders correctly', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <SignInPage />
        </MemoryRouter>
      </MockedProvider>,
    );

    expect(screen.getByText(/sign in to your account/i)).toBeInTheDocument();
  });
});
