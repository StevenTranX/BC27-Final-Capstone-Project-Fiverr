import React, { useState } from 'react';
import { Box, Stack, Grid, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './SubHeader.module.scss';
import Rating from '@mui/material/Rating';
const SubHeader = ({ jobDetail }) => {
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
        <Avatar src={jobDetail.avatar} className={styles.mainContent__avatar} />
        <h4 className={styles.mainContent__item}>{jobDetail.tenNguoiTao}</h4>
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
            <Rating
              name='read-only'
              value={jobDetail.congViec.saoCongViec}
              readOnly
            />
          </Grid>
          <Grid item>{jobDetail.congViec.saoCongViec}</Grid>
          <Grid item>({jobDetail.congViec.danhGia})</Grid>
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
