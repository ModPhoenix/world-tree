import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Link } from '@mui/material';
import { ReactNode } from 'react';
import { generatePath, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { Links } from 'settings';

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <header>
        <h1>
          <Link href={Links.index} aria-label="World Tree">
            <Logo />
          </Link>
        </h1>
        <nav>
          <Link href={Links.index} aria-label="Home">
            Home
          </Link>
          <Link href={Links.explore} aria-label="Search and Explore">
            Search and Explore
          </Link>
          <Link href={Links.education} aria-label="Education">
            Education
          </Link>
          <Link href={Links.people} aria-label="People">
            People
          </Link>
          <Link
            href={generatePath(Links.profile, { username: 'leonhardeuler' })}
            aria-label="Profile"
          >
            Profile
          </Link>
          <IconButton aria-label="Account Menu">
            <AccountCircleIcon />
          </IconButton>
        </nav>
      </header>
      <main>
        <Outlet />
        {children}
      </main>
    </div>
  );
}
