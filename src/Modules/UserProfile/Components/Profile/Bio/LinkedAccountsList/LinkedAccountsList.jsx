import React from 'react';
import { Menu, MenuList, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { Link, NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
const LinkedAccountsList = () => {
  const StyledMenuItem = styled(MenuItem)({
    color: '#00698c',
  });
  const StyledListItem = styled(ListItemText)({
    color: '#00698c',
  });
  return (
    <div>
      <MenuList>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <StyledListItem>
            <NavLink>Facebook</NavLink>
          </StyledListItem>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>Google</NavLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>Dribble</NavLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>Stack Overflow</NavLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>GitHub</NavLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>Twitter</NavLink>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem disableGutters={true}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>
            <NavLink>Vimeo</NavLink>
          </ListItemText>
        </StyledMenuItem>
      </MenuList>
    </div>
  );
};

export default LinkedAccountsList;
