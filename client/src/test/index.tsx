import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

function render(
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult {
  return rtlRender(ui, {
    wrapper: ({ children }) => <div>{children}</div>,
    ...options,
  });
}

function renderWithUser(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// override React Testing Library's render with our own
// eslint-disable-next-line import/export
export { render, renderWithUser };
