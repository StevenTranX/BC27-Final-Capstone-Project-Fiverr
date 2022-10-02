import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { StyledLink } from '../CategoriesList/CategoriesList';
const MoreFromFiverrList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Business`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Pro`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Studios`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Logo Maker`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Guides`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Get Inspired`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Fiverr Select`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText
              primary={`ClearVoice
              `}
            ></ListItemText>
            <ListItemText
              sx={{ fontSize: '13px', color: '#b5b6ba' }}
              primary={`ContentMarketing
              `}
            ></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText
              primary={`Fiverr Workspace
              `}
            ></ListItemText>
            <ListItemText
              sx={{ fontSize: '13px', color: '#b5b6ba' }}
              primary={`Invoice Software
              `}
            ></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText
              primary={`Learn
              `}
            ></ListItemText>
            <ListItemText
              sx={{ fontSize: '13px', color: '#b5b6ba' }}
              primary={`Online Courses
              `}
            ></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline="hover">
            <ListItemText primary={`Working Not Working`}></ListItemText>
          </StyledLink>
        </ListItem>
      </List>
    </>
  );
};

export default MoreFromFiverrList;
