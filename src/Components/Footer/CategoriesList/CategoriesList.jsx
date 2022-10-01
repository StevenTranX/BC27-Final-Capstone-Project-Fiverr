import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import React from 'react';
import LinkFooter from '../../../ReusableComponents/Link/LinkFooter';
import Link from '@mui/material/List';
const CategoriesList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemText primary={`Graphics & Design`} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Digital Marketing`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Writing & Translation`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Video & Animation`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Music & Audio`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Programming & Tech`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Data`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Business`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Lifestyle`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Sitemap`}></ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default CategoriesList;
