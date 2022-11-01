import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Skeleton, Stack } from '@mui/material';

const CardListSkeleton = ({ length }) => {
  return (
    <Container>
      <Box>
        <Grid container height={'280px'}>
          {Array.from(new Array(length)).map((x, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Box padding={1}>
                  <Skeleton
                    variant='rectangular'
                    width={'100%'}
                    height={'120px'}
                  />
                  <Stack display={'flex'}>
                    <Skeleton
                      variant='circular'
                      height={'30px'}
                      width={'30px'}
                    />
                    <Skeleton width={'60%'} />
                  </Stack>
                  <Skeleton width={'100%'} />
                  <Skeleton
                    width={'100%'}
                    variant='rectangular'
                    height={'30px'}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

CardListSkeleton.propTypes = {
  length: PropTypes.number,
};
CardListSkeleton.defaultProps = {
  length: 4,
};

export default CardListSkeleton;
