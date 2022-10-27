import { Box, Stack, Grid, Slider } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const SellerReview = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'self-start'}
      >
        <Stack>
          <Stack
            display={'flex'}
            alignItems={'center'}
            width={'40%'}
            marginBottom={'30px'}
          >
            <Grid container alignItems='center' color={'#ffb33e'} spacing={1.1}>
              {' '}
              <Grid
                item
                sx={{ fontSize: '20px', color: '#404145', fontWeight: 700 }}
              >
                {' '}
                <span>174 Reviews</span>
              </Grid>
              <Grid item display={'flex'} alignItems={'center'}>
                <Rating name='read-only' value={value} readOnly />
                <Typography sx={{ fontWeight: 700 }} component='legend'>
                  {value}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <Stack>
            <Stack>
              <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                alignItems={'self-start'}
                spacing={1.5}
              >
                <Grid item>5 Stars</Grid>
                <Grid item>
                  <Slider
                    sx={{ width: '200px', color: '#ffb33e' }}
                    defaultValue={30}
                    value={100}
                    aria-label='Disabled slider'
                    disableSwap={true}
                  />
                </Grid>
                <Grid item> ( 174 )</Grid>
              </Grid>
            </Stack>
            <Stack>
              <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                alignItems={'self-start'}
                spacing={1.5}
              >
                <Grid item>4 Stars</Grid>
                <Grid item>
                  <Slider
                    sx={{
                      width: '200px',
                      color: '#ffb33e',
                      backgroundColor: 'grey',
                    }}
                    defaultValue={30}
                    value={10}
                    aria-label='Disabled slider'
                    disableSwap={true}
                  />
                </Grid>
                <Grid item> ( 2 )</Grid>
              </Grid>
            </Stack>
            <Stack>
              <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                alignItems={'self-start'}
                spacing={1.5}
              >
                <Grid item>3 Stars</Grid>
                <Grid item>
                  <Slider
                    sx={{ width: '200px', color: '#ffb33e' }}
                    defaultValue={30}
                    value={0}
                    aria-label='Disabled slider'
                    disableSwap={true}
                  />
                </Grid>
                <Grid item> ( 0 )</Grid>
              </Grid>
            </Stack>
            <Stack>
              <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                alignItems={'self-start'}
                spacing={1.5}
              >
                <Grid item>2 Stars</Grid>
                <Grid item>
                  <Slider
                    sx={{ width: '200px', color: '#ffb33e' }}
                    defaultValue={30}
                    value={0}
                    aria-label='Disabled slider'
                    disableSwap={true}
                  />
                </Grid>
                <Grid item> ( 0 )</Grid>
              </Grid>
            </Stack>
            <Stack>
              <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                alignItems={'self-start'}
                spacing={1.5}
              >
                <Grid item>1 Stars</Grid>
                <Grid item>
                  <Slider
                    sx={{ width: '200px', color: '#ffb33e' }}
                    defaultValue={30}
                    value={0}
                    aria-label='Disabled slider'
                    disableSwap={true}
                  />
                </Grid>
                <Grid item> ( 0 )</Grid>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'60%'} marginTop={'90px'}>
          <Grid
            container
            sx={{
              fontSize: '20px',
              color: '#404145',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Rating Breakdown
          </Grid>
          <Grid container>
            <Grid container justifyContent={'space-between'} display={'flex'}>
              <Grid item sx={{ fontSize: '16px', marginTop: '8px' }}>
                Seller communication level
              </Grid>
              <Grid
                item
                display={'flex'}
                alignItems={'center'}
                sx={{ color: '#ffb33e' }}
              >
                <StarIcon />5
              </Grid>
            </Grid>
            <Grid container justifyContent={'space-between'} display={'flex'}>
              <Grid item sx={{ fontSize: '16px', marginTop: '8px' }}>
                Recommend to a friend
              </Grid>
              <Grid
                item
                display={'flex'}
                alignItems={'center'}
                sx={{ color: '#ffb33e' }}
              >
                <StarIcon />5
              </Grid>
            </Grid>
            <Grid container justifyContent={'space-between'} display={'flex'}>
              <Grid item sx={{ fontSize: '16px', marginTop: '8px' }}>
                Service as described
              </Grid>
              <Grid
                item
                display={'flex'}
                alignItems={'center'}
                sx={{ color: '#ffb33e' }}
              >
                <StarIcon />5
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </div>
  );
};

export default SellerReview;
