import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Container,
} from '@mui/material';
import styles from './SliderHeader.module.scss';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsByName } from '../../../../JobList/Slices/JobListSlice';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Loading from '../../../../../Components/Loading/Loading';
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
  backgroundColor: '#fff',
  cursor: 'pointer',
});
const StyledOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    opacity: 0.9,
  },
  borderRadius: '50px',
  border: '1px #fff solid',
  color: '#000',
  height: '26px',
  color: '#fff',
  cursor: 'pointer',
});
const SliderHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(getJobsByName(inputValue)).unwrap();
      setInputValue('');
      navigate('/jobs');
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <Container className={styles.sliderHeader}>
      {isLoading && <Loading />}
      <Box
        maxWidth={'600px'}
        height={'222px'}
        justifyContent={'center'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Typography component='h3' variant='h3' sx={{ marginBottom: '18px' }}>
          Find the perfect <i>freelance</i> services for your business
        </Typography>
        <Box fullWidth height={'48px'}>
          <Grid container>
            <Grid item lg={10} md={10}>
              <form onSubmit={handleSubmit}>
                <StyledInput
                  className={styles.inputField}
                  fullWidth
                  sx={{ height: '40px' }}
                  type='search'
                  size='small'
                  placeholder={`Try "building mobile app"`}
                  onChange={handleInputChange}
                ></StyledInput>
              </form>
            </Grid>
            <Grid item lg={2} md={2}>
              <StyledButton
                className={styles.searchButton}
                sx={{ height: '100%', backgroundColor: '#1dbf73' }}
                fullWidth
                variant='contained'
                type='submit'
              >
                Search
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ marginTop: '10px', color: '#fff' }}>
            <Grid item>
              <Typography> Popular:</Typography>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant='outlined'>
                Website Design
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant='outlined'>
                WordPress
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant='outlined'>
                Logo Design
              </StyledOutlinedButton>
            </Grid>
            <Grid item>
              <StyledOutlinedButton variant='outlined'>
                Video Editing
              </StyledOutlinedButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SliderHeader;
