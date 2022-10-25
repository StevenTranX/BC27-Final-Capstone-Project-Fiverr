import { ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import List from '@mui/material/List';
import React from 'react';
import Link from '@mui/material/Link';
export const StyledLink = styled(
  Link,
  {}
)({
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#74767e',
  fontSize: '16px',
});
const CategoriesList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText
              sx={{ fontSize: '16px' }}
              primary={`Graphics & Design`}
            ></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Digital Marketing`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Writing & Translation`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Music & Audio`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Programming & Tech`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Video & Animation`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Data`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Business`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Lifestyle`}></ListItemText>
          </StyledLink>
        </ListItem>
        <ListItem disablePadding>
          <StyledLink underline='hover'>
            <ListItemText primary={`Sitemap`}></ListItemText>
          </StyledLink>
        </ListItem>
      </List>
    </>
  );
};

export default CategoriesList;
