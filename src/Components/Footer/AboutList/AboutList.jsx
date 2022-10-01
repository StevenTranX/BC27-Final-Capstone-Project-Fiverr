import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
const AboutList = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemText primary={`Careers`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Press & News`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Partnerships`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Privacy Policy`}></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={`Terms of Service`}></ListItemText>
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

export default AboutList;
