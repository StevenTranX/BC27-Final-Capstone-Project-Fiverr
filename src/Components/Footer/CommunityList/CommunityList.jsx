import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { StyledLink } from '../CategoriesList/CategoriesList';
const CommunityList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Events`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Blog`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Forum`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Community Standards`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Podcast`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Affiliates`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Invite a Friend`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Become a Seller`}></ListItemText>
          </StyledLink>
        </ListItem>
      </List>
    </>
  );
};

export default CommunityList;
