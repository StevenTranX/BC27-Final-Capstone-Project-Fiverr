import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styles from './ActiveGig.module.scss';
import noGig from '../../../../Images/UserProfile/vector12.svg';
import CardLayout from '../../../../ReusableComponents/Profile_CardLayOut/CardLayout';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBookingJob,
  getBookingJobs,
} from '../../Slices/userProfileSlice';
import { getJobDetailById } from '../../../JobList/Slices/JobListSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../Components/Loading/Loading';
const ActiveGig = () => {
  const { userBookingJobs } = useSelector((state) => state.user);
  const { message, isLoading } = useSelector((state) => state.user.settings);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleViewDetail = async (jobId) => {
    await dispatch(getJobDetailById(jobId)).unwrap();
  };
  const handleDeleteJob = async (jobId) => {
    try {
      await dispatch(deleteBookingJob(jobId)).unwrap();
      enqueueSnackbar(message, { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  };

  const handleCreateGig = () => {
    navigate('/jobs');
  };
  useEffect(() => {
    dispatch(getBookingJobs());
  }, []);
  return (
    <section className={styles.activeGig}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.activeGig__container}>
          <div className={styles.activeGig__container_header}>
            <h4>ACTIVE GIGS</h4>
          </div>
          {userBookingJobs?.length === 0 ? (
            <div className={styles.activeGig__container_body}>
              <div className={styles.activeGig__container_nonActive}>
                <div className={styles.nonActiveWrapper}>
                  <div className={styles.nonActive_row}>
                    <div className={styles.nonActive_col}>
                      <img src={noGig} alt='' srcset='' />
                      <h4>It seems that you don't have any active Gigs</h4>
                      <Button
                        sx={{
                          marginBottom: '20px',
                          backgroundColor: '#1dbf73',
                          textTransform: 'capitalize',
                          '&:hover': {
                            backgroundColor: '#1dbf73',
                            opacity: 0.9,
                          },
                        }}
                        variant='contained'
                        onClick={() => {
                          handleCreateGig();
                        }}
                      >
                        Create a new Gig
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            userBookingJobs.map((bookingJob) => {
              return (
                <Box
                  key={bookingJob.id}
                  padding='30px 30px'
                  sx={{
                    backgroundColor: '#fff',
                    marginTop: '30px',
                    border: '1px solid #dadbdd',
                  }}
                >
                  <Box display='flex'>
                    <Stack width='30%'>
                      <img src={bookingJob.congViec.hinhAnh} alt='img'></img>
                    </Stack>
                    <Stack widht='70%' paddingLeft='30px'>
                      <Typography variant='h5' sx={{ marginBottom: '10px' }}>
                        {bookingJob.congViec.tenCongViec}
                      </Typography>
                      <Typography variant='p' sx={{ marginBottom: '10px' }}>
                        {bookingJob.congViec.moTa.length > 50
                          ? bookingJob.congViec.moTa.substr(0, 200) + '...'
                          : bookingJob.congViec.moTa}
                      </Typography>
                      <Stack
                        display='flex'
                        flexDirection={'row'}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                        marginTop={'10px'}
                      >
                        <Stack>
                          <Button
                            sx={{
                              marginRight: '10px',
                              backgroundColor: '#1dbf73',
                              '&:hover': {
                                backgroundColor: '#1dbf73',
                                opacity: 0.9,
                              },
                              width: '120px',
                            }}
                            variant='contained'
                            onClick={() => {
                              handleViewDetail(bookingJob.congViec.id);
                            }}
                          >
                            View Detail
                          </Button>
                        </Stack>
                        <Stack>
                          <Button
                            variant='contained'
                            color='error'
                            sx={{ width: '120px' }}
                            onClick={() => {
                              handleDeleteJob(bookingJob.id);
                            }}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              );
            })
          )}
        </div>
      )}
    </section>
  );
};

export default ActiveGig;
