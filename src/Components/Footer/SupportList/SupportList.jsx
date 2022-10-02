import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { StyledLink } from '../CategoriesList/CategoriesList';
const SupportList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Help & Support`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Trust & Safety`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Selling on Fiverr`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Buying on Fiverr`}></ListItemText>
          </StyledLink>
        </ListItem>
      </List>
    </>
  );
};

export default SupportList;
