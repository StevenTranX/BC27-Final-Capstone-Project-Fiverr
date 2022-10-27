import React from 'react';
import {
  List,
  ListSubheader,
  ListItemText,
  Menu,
  MenuList,
  MenuItem,
  Divider,
} from '@mui/material';
import styles from './AboutGig.module.scss';
const AboutGig = () => {
  return (
    <div className={styles.content__aboutGig}>
      <p>
        <strong>
          <u>FIX PHP/PHP MYSQ/LMYSQL DATABASE/PHP/CUSTOM PHP</u>
        </strong>
        <br></br>
      </p>
      <p>
        Hi, If you are facing issues related to Php, MYSQL , Database
        integration or any other issues related to website and wanted to fix
        these issues then I am available and I will try my best to resolve your
        issues immediately .The details of my services are provided as follows.
      </p>
      <br></br>
      <p>
        <strong>My Gig Services:</strong>
      </p>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
        <ListItemText primary='Sent mail' />
      </List>
      <p>
        <strong>
          <u>FIX PHP/PHP MYSQ/LMYSQL DATABASE/PHP/CUSTOM PHP</u>
        </strong>
        <br></br>
      </p>
      <Divider />
      <MenuList>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
        <MenuItem>Development</MenuItem>
      </MenuList>
    </div>
  );
};

export default AboutGig;
