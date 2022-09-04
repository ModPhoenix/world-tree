import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Box, Grid, IconButton, Link, Tab, Tabs, Tooltip } from '@mui/material';
import { ReactNode } from 'react';
import { generatePath, Outlet, Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { useAuth, useRouteMatch } from 'hooks';
import { Links } from 'settings';

import { AccountMenu } from '../AccountMenu';

interface MainLayoutProps {
  children?: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isAuthorized } = useAuth();
  const routeMatch = useRouteMatch([
    Links.index,
    Links.explore,
    Links.education,
    Links.people,
    Links.profile,
  ]);

  const currentTab = routeMatch?.pattern?.path;

  return (
    <Grid container wrap="nowrap" minHeight="100vh">
      <Grid item component="header">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          height="100vh"
          sx={(theme) => ({
            borderRight: `1px solid ${theme.palette.divider}`,
          })}
        >
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            height="84px"
          >
            <Box component="h1" height="36px" m={0}>
              <Link href={Links.index} aria-label="World Tree">
                <Logo />
              </Link>
            </Box>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tabs
              value={currentTab ?? Links.index}
              orientation="vertical"
              component="nav"
              TabIndicatorProps={{ sx: { display: 'none' } }}
            >
              <Tab
                role="link"
                aria-label="Home"
                value={Links.index}
                to={Links.index}
                disableRipple
                component={RouterLink}
                icon={<HomeOutlinedIcon />}
              />
              <Tab
                role="link"
                aria-label="Search and Explore"
                value={Links.explore}
                to={Links.explore}
                disableRipple
                component={RouterLink}
                icon={<AccountTreeOutlinedIcon />}
              />
              <Tab
                role="link"
                aria-label="Education"
                value={Links.education}
                to={Links.education}
                disableRipple
                component={RouterLink}
                icon={<SchoolOutlinedIcon />}
              />
              <Tab
                role="link"
                aria-label="People"
                value={Links.people}
                to={Links.people}
                disableRipple
                component={RouterLink}
                icon={<PeopleOutlineOutlinedIcon />}
              />
              <Tab
                role="link"
                aria-label="Profile"
                value={Links.profile}
                disableRipple
                to={generatePath(Links.profile, { username: 'leonhardeuler' })}
                component={RouterLink}
                icon={<PersonOutlinedIcon />}
              />
            </Tabs>

            {isAuthorized && (
              <Tooltip title="Add Node">
                <IconButton
                  aria-label="Add Node"
                  href={Links.compose.node}
                  sx={{ mt: 2 }}
                  color="primary"
                >
                  <AddRoundedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            height="84px"
          >
            <AccountMenu />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item component="main" sm={9}>
          <Outlet />
          {children}
        </Grid>
        <Grid
          item
          sm={3}
          sx={(theme) => ({
            borderLeft: `1px solid ${theme.palette.divider}`,
          })}
        ></Grid>
      </Grid>
    </Grid>
  );
}
