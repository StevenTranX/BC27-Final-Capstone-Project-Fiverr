import React from 'react';
import { Box, Stack, Grid, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './SubHeader.module.scss';
const SubHeader = () => {
  return (
    <Box display={'flex'} className={styles.mainContent__row}>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className={styles.mainContent__col}
      >
        <Avatar className={styles.mainContent__avatar}></Avatar>
        <h4 className={styles.mainContent__item}>Name Here</h4>
        <span className={styles.mainContent__item}>Level 2 Seller </span>
        <span className={styles.mainContent__item}>|</span>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        className={styles.mainContent__col}
      >
        <Grid container spacing={1} alignItems='center'>
          <Grid item color='#ffb33e'>
            {' '}
            <StarIcon />
          </Grid>
          <Grid color='#ffb33e' item>
            {' '}
            <StarIcon />
          </Grid>
          <Grid color='#ffb33e' item>
            {' '}
            <StarIcon />
          </Grid>
          <Grid item color='#ffb33e'>
            {' '}
            <StarIcon />
          </Grid>
          <Grid item color='#ffb33e'>
            {' '}
            <StarIcon />
          </Grid>
          <Grid item color='#ffb33e'>
            {' '}
            5{' '}
          </Grid>
          <Grid item> ( 174 )</Grid>
        </Grid>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
        className={styles.mainContent__col}
      >
        <Grid container>
          <Grid item> 1 Order in Queue </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default SubHeader;
