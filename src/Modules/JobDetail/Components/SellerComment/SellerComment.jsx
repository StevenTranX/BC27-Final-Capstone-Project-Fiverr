import { Box, Stack, Grid, Avatar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

const SellerComment = () => {
  const [value, setValue] = useState(5);
  const { focused } = useFormControl() || {};

  return (
    <div>
      <Box marginTop={'30px'}>
        <Stack display='flex' flexDirection={'row'}>
          <Stack marginRight='15px'>
            <Avatar />
          </Stack>
          <Stack>
            <Grid container flexDirection={'column'} spacing={0.6}>
              <Grid item sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                {' '}
                name here
              </Grid>
              <Grid item sx={{ fontSize: '15px' }} marginBottom='10px'>
                {' '}
                job name
              </Grid>
              <Grid item>
                <Grid container alignItems={'center'} spacing={1}>
                  <Grid item>
                    {' '}
                    <Rating name='read-only' value={value} readOnly />
                  </Grid>
                  <Grid item>|</Grid>
                  <Grid item> Country</Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography marginTop={'15px'}>
              This is my fourth time working with this seller and I will
              definitely be back again! Their response time is AMAZING and they
              were able to help me sort out the problems in our php code in a
              very short amount of time. Thanks!
            </Typography>
            <Stack marginTop={'15px'}>
              <Grid container spacing={1} alignItems={'center'}>
                <Grid item sx={{ fontWeight: 700 }}>
                  Helpful ?
                </Grid>
                <Grid item>
                  <Grid container alignItems={'center'}>
                    <Grid item>
                      <ThumbUpOffAltIcon />
                    </Grid>
                    <Grid item sx={{ fontWeight: 700 }}>
                      Yes
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems={'center'}>
                    <Grid item>
                      <ThumbDownOffAltIcon />
                    </Grid>
                    <Grid item sx={{ fontWeight: 700 }}>
                      No
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
            <Stack marginTop='15px'>
              <Stack>
                <Grid
                  container
                  spacing={0.6}
                  alignItems={'center'}
                  sx={{ fontWeight: 700 }}
                >
                  <Grid
                    item
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '16px',
                      marginRight: '15px',
                    }}
                  >
                    {' '}
                    <Avatar />
                  </Grid>
                  <Grid item sx={{ fontSize: '15px' }} marginBottom='10px'>
                    <Grid container flexDirection={'column'}>
                      {' '}
                      <Grid item margin='12px 0px '>
                        {' '}
                        Seller's name
                      </Grid>
                      <Grid item sx={{ fontSize: '14px', fontWeight: '400' }}>
                        {' '}
                        Description here{' '}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Box component='form' noValidate autoComplete='off'>
            <FormControl sx={{ margin: '20px 0px', width: '100%' }}>
              <textarea
                placeholder='Please enter your comments'
                style={{ width: '100%', height: '150px' }}
              />
              <Button
                sx={{
                  backgroundColor: '#1dbf73',
                  textTransform: 'capitalize',
                  width: '150px',
                  marginTop: '30px',
                  fontSize: '14px',
                }}
                variant='contained'
              >
                Add Comment
              </Button>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default SellerComment;
