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
import SearchIcon from '@mui/icons-material/Search';
const StyledButton = styled(Button)({
  boxShadow: 'none',
  backgroundColor: '#1dbf73',
  textTransform: 'none',
  '&:hover': {
    opacity: 0.8,
  },
  borderStartStartRadius: '0px',
  borderBottomLeftRadius: '0px',
  fontSize: '16px',
});
const StyledInput = styled(TextField)({
  '&:hover': {
    border: 'none',
    borderRadius: 'none',
  },

  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
  border: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
});
const StyledOutlinedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    opacity: 0.9,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#404145',
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
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <Box
          maxWidth={'600px'}
          height={'222px'}
          justifyContent={'center'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography
            component='h3'
            variant='h3'
            sx={{ marginBottom: '18px', color: '#fff' }}
          >
            Find the perfect <i>freelance</i> services for your business
          </Typography>
          <Box fullWidth height={'60px'}>
            <Grid container>
              <Grid
                item
                lg={10}
                md={10}
                sx={{
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px',
                  height: '100%',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <StyledInput
                    className={styles.inputField}
                    sx={{
                      border: 'none',
                      height: '52px',
                      borderTopRightRadius: '0px',
                      borderBottomRightRadius: '0px',
                    }}
                    type='search'
                    size='small'
                    placeholder={`Try "design"`}
                    onChange={handleInputChange}
                  ></StyledInput>
                </form>
              </Grid>
              <Grid item lg={2} md={2}>
                <StyledButton
                  className={styles.searchButton}
                  sx={{
                    height: '100%',
                    backgroundColor: '#1dbf73',
                    '&:hover': {
                      backgroundColor: '#1dbf73',
                    },
                  }}
                  fullWidth
                  variant='contained'
                  type='submit'
                  onClick={() => handleSubmit()}
                >
                  Search
                </StyledButton>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: '10px', color: '#fff' }}
            >
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
      )}
    </Container>
  );
};

export default SliderHeader;
