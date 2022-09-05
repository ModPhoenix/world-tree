import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useState, MouseEvent } from 'react';

import { useAuth } from 'hooks';
import { Links } from 'settings';

export function AccountMenu() {
  const { isAuthorized, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    logout?.();
  }

  return (
    <>
      {isAuthorized ? (
        <Tooltip title="Account">
          <IconButton
            onClick={handleOpen}
            aria-label="Account Menu"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{user?.username[0]}</Avatar>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Sign in">
          <IconButton href={Links.signIn}>
            <Avatar sx={{ width: 32, height: 32 }}>
              <LoginIcon fontSize="small" />
            </Avatar>
          </IconButton>
        </Tooltip>
      )}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: 'visible',
            mt: -0.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText primary={user?.username} secondary={user?.email} />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}
