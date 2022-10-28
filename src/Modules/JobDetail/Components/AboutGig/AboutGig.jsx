import React from 'react';
import {
  List,
  ListSubheader,
  ListItemText,
  Menu,
  MenuList,
  MenuItem,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import styles from './AboutGig.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const AboutGig = ({ jobDetail }) => {
  const shortDescription = jobDetail?.congViec.moTaNgan;

  const splitByMinus = shortDescription.split('-');

  return (
    <div className={styles.content__aboutGig}>
      <p>
        <strong>
          <u>{jobDetail.congViec.tenCongViec}</u>
        </strong>
        <br></br>
      </p>
      <Typography>{jobDetail.congViec.moTa}</Typography>
      <br></br>
      <p>
        <strong>My Gig Services:</strong>
      </p>
      <List component='nav' aria-labelledby='nested-list-subheader'>
        {splitByMinus.map((x, i) => {
          return (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />
                </ListItemIcon>
                <ListItemText primary={x} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default AboutGig;
