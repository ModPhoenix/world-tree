import AddIcon from '@mui/icons-material/Add';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useSnackbar } from 'notistack';
import { useState, MouseEvent } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';

import { useDeleteNodeMutation } from 'api';
import { useModal } from 'components';
import { useAuth } from 'hooks';
import { Links } from 'settings';
import { getCreateNodeLink } from 'utils';

interface NodeMenuProps {
  nodeId: string;
  nodeName: string;
}

export function NodeMenu({ nodeId, nodeName }: NodeMenuProps): JSX.Element {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { enqueueSnackbar } = useSnackbar();
  const [deleteKnowledgesMutation] = useDeleteNodeMutation({
    variables: {
      where: {
        id: nodeId,
      },
    },
    refetchQueries: ['Node'],
    onCompleted() {
      enqueueSnackbar('Node deleted', { variant: 'success' });
      navigate(Links.index);
    },
    onError(error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    },
  });
  const openDeleteNodeModal = useModal({
    title: 'Delete node',
    description: `Are you sure you want to delete node "${nodeName}"?`,
    confirmationText: 'Delete',
    cancellationText: 'Cancel',
    confirmationButtonProps: {
      color: 'error',
    },
  });

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteNode = () => {
    openDeleteNodeModal().then(() => {
      deleteKnowledgesMutation();
    });
  };

  return (
    <>
      {isAuthorized ? (
        <Tooltip title="Node menu">
          <IconButton
            onClick={handleOpen}
            aria-label="Node menu"
            aria-controls={open ? 'node-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      ) : null}
      <Menu
        anchorEl={anchorEl}
        id="node-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MenuItem>
          <ListItemIcon>
            <CheckBoxOutlineBlankIcon />
          </ListItemIcon>
          Mark as known
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={getCreateNodeLink(nodeId)}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          Create node
        </MenuItem>
        <MenuItem
          component={Link}
          to={generatePath(Links.node.page.update, { id: nodeId })}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          Edit node
        </MenuItem>
        <MenuItem
          onClick={handleDeleteNode}
          sx={(theme) => ({
            color: theme.palette.error.main,
          })}
        >
          <ListItemIcon>
            <DeleteOutlinedIcon color="error" />
          </ListItemIcon>
          Delete node
        </MenuItem>
      </Menu>
    </>
  );
}
