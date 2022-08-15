import { render, screen } from 'test';

import { MainLayout } from '.';

describe('<MainLayout />', () => {
  it('contains important content', () => {
    render(<MainLayout />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /world tree/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /search and explore/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /education/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /people/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /account menu/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('render children', () => {
    render(<MainLayout>Hello World</MainLayout>);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
