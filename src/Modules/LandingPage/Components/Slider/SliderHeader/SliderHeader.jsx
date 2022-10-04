import React from 'react';
import { Box, TextField, Typography, Grid, Button } from '@mui/material';
import styles from './SliderHeader.module.scss';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  boxShadow: 'none',
  backgroundColor: '#1dbf73',
  textTransform: 'none',
  '&:hover': {
    opacity: 0.9,
  },
  borderStartStartRadius: '0px',
  borderBottomLeftRadius: '0px',
});
const StyledInput = styled(TextField)({
  '&:hover': {
    opacity: 0.9,
    border: 'none',
  },
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
  border: 0,
});
const StyledOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    opacity: 0.9,
  },
  borderRadius: '50px',
  border: '1px black solid',
  color: '#000',
  height: '26px',
});
const SliderHeader = () => {
  return (
    <>
      <Box maxWidth={'560px'} height={'222px'}>
        <Typography component="h3" variant="h3">
          Find the perfect <i>freelance</i> services for your business
        </Typography>
        <Box fullWidth height={'48px'}>
          <Grid container>
            <Grid item lg={10} md={10}>
              <StyledInput
                className={styles.inputField}
                fullWidth
                sx={{ height: '40px' }}
                type="search"
                size="small"
              ></StyledInput>
            </Grid>
            <Grid item lg={2} md={2}>
              <StyledButton
                className={styles.searchButton}
                sx={{ height: '100%', backgroundColor: '#1dbf73' }}
                fullWidth
                variant="contained"
              >
                Search
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item>
              <Typography> Popular:</Typography>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant="outlined">
                Website Design
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant="outlined">
                WordPress
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant="outlined">
                Logo Design
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant="outlined">
                Video Editing
              </StyledOutlinedButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
      ;
    </>
  );
};

export default SliderHeader;
