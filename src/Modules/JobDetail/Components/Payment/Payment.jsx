import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LoopIcon from '@mui/icons-material/Loop';
import DoneIcon from '@mui/icons-material/Done';
import styles from './Payment.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
const Payment = ({ jobDetail }) => {
  const dispatch = useDispatch();
  const handleClickPayment = async () => {
    await dispatch().unwrap();
  };
  if (jobDetail) {
    const shortDescription = jobDetail?.congViec.moTaNgan;
    const splitByPlus = shortDescription.split('+');

    return (
      <Box sx={{ width: '100%' }}>
        <Stack>
          <Grid
            height={'100%'}
            container
            alignItems={'center'}
            borderBottom={'1px solid grey'}
            textAlign={'center'}
            lineHeight={'60px'}
            verticalalign={'middle'}
            fontWeight={'700'}
            fontSize={'18px'}
            cursor={'pointer'}
          >
            <Grid width={'33.3333%'} item borderRight={'1px solid grey'}>
              Basic
            </Grid>
            <Grid width={'33.3333%'} item>
              Standard
            </Grid>
            <Grid width={'33.3333%'} item borderLeft={'1px solid grey'}>
              Premium
            </Grid>
          </Grid>
        </Stack>
        <Stack padding={'20px 20px'}>
          <Stack marginBottom={'15px'}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
              US${jobDetail.congViec.giaTien}.00
            </Typography>
            <Typography>
              Save up to 10% with
              <Link sx={{ color: '' }}> Subscribe to Save </Link>{' '}
            </Typography>
          </Stack>
          <Stack marginBottom={'20px'}>
            <Typography sx={{ fontSize: '13px' }}>
              <b>Basic Small Issues</b> Fix maximum 1 to 3 Php , MySQL issues,
              bugs and error.
            </Typography>
          </Stack>
          <Stack marginBottom={'15px'}>
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <Stack marginRight={'10px'}>
                <Grid container spacing={0.5}>
                  <Grid item>
                    <AvTimerIcon />
                  </Grid>
                  <Grid item>
                    <Typography fontWeight={500} fontSize={'14px'}>
                      2 Days Delivery
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Stack>
                <Grid container spacing={0.5}>
                  <Grid item>
                    <LoopIcon />
                  </Grid>
                  <Grid item>
                    {' '}
                    <Typography fontWeight={500} fontSize={'14px'}>
                      {' '}
                      3 Revisions
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
            <Stack>
              {splitByPlus.map((x, i) => {
                return (
                  <Grid
                    key={i}
                    display={'flex'}
                    justifyContent={'space-between'}
                    container
                    alignItems={'center'}
                    spacing={0.5}
                    flexWrap={'nowrap'}
                  >
                    <Grid
                      item
                      fontSize={'18px'}
                      fontWeight={700}
                      color={'#1dbf73'}
                    >
                      <DoneIcon />
                    </Grid>
                    <Grid item fontSize={'14px'}>
                      {' '}
                      {x}
                    </Grid>
                  </Grid>
                );
              })}
            </Stack>
          </Stack>
          <Stack marginTop={'10px'}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#1dbf73', width: '100%', height: '40px' }}
              className={styles.paymentButton}
              onClick={handleClickPayment}
            >
              Continue (${jobDetail.congViec.giaTien}.00)
              <span className={styles.paymentArrow}>
                <ArrowForwardIcon sx={{ fontSize: '16px' }} />
              </span>
            </Button>
          </Stack>
          <Stack>
            <Button
              sx={{ textTransform: 'capitalize', marginTop: '10px' }}
              variant='text'
            >
              Compare Packages
            </Button>
          </Stack>
        </Stack>
      </Box>
    );
  }
};

export default Payment;
