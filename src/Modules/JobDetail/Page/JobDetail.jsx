import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Divider, Link, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import NavBar from '../../../Components/NavBar/NavBar';
import {
  getJobGenres,
  getJobsById,
  getJobsByName,
} from '../../JobList/Slices/JobListSlice';
import UserProfileHeader from '../../UserProfile/Components/Header/UserProfileHeader';
import styles from './JobDetail.module.scss';

import AboutGig from '../Components/AboutGig/AboutGig';
import SellerDescription from '../Components/SellerDescription/SellerDescription';
import SubHeader from '../Components/SubHeader/SubHeader';
import SellerReview from '../Components/SellerReview/SellerReview';
import SellerComment from '../Components/SellerComment/SellerComment';
const JobDetail = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const { jobDetailById } = useSelector((state) => state.jobList);
  useEffect(() => {
    dispatch(getJobGenres());
  }, []);

  const handleSelectJobId = async (jobId) => {
    try {
      await dispatch(getJobsById(jobId)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(getJobsByName(inputValue)).unwrap();
      setTimeout(2000);
      setInputValue('');
      navigate('/jobs');
    } catch (error) {
      console.log(error);
    }
  };
  if (jobDetailById.length !== 0) {
    return (
      <div className={styles.jobDetail}>
        <div className={styles.jobDetail__container}>
          <div className={styles.jobDetail__header}>
            <UserProfileHeader
              onSubmit={handleSubmit}
              handleChange={handleChange}
              setInputValue={setInputValue}
            />
          </div>
          <div className={styles.jobDetail__navBar}>
            <NavBar handleSelect={handleSelectJobId} />
          </div>
          <Container>
            <div className={styles.jobDetail__mainContent}>
              <div className={styles.mainContent__wrapper}>
                <Box display='flex'>
                  <Stack
                    width='60%'
                    justifyContent={'space-between'}
                    marginRight={'60px'}
                  >
                    <div className={styles.mainContent__onGoingNav}>
                      <Box
                        sx={{
                          typography: 'body1',
                          '& > :not(style) + :not(style)': {
                            pl: 1.3,
                          },
                        }}
                      >
                        <Link underline='hover' href='#'>
                          Programming & Tech
                        </Link>
                        <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                        <Link underline='hover' href='#'>
                          Programming & Tech
                        </Link>
                        <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                        <Link underline='hover' href='#'>
                          Programming & Tech
                        </Link>
                      </Box>
                    </div>
                    <div className={styles.mainContent__header}>
                      <h2>Job Name</h2>
                    </div>
                    <div className={styles.mainContent__subHeader}>
                      <SubHeader />
                    </div>
                    <Divider />
                    <div className={styles.mainContent__jobAvatar}>
                      <img src='' alt='' />
                    </div>
                    <div className={styles.mainContent__gigDescription}>
                      <header>
                        <h2>About This Gig</h2>
                      </header>
                      <div className={styles.gigDescription__wrapper}>
                        <div className={styles.gigDescription__content}>
                          <AboutGig />
                        </div>
                      </div>
                    </div>
                    <SellerDescription />
                    <div>
                      <SellerReview />
                    </div>
                    <Divider />
                    <div>
                      <SellerComment />
                    </div>
                  </Stack>
                  <Stack border={'1px solid grey'} width={'40%'}>
                    Payment Here
                  </Stack>
                </Box>
              </div>
            </div>
          </Container>

          <Divider />
          <div className={styles.jobDetail__footer}>
            <Container>
              <Footer />
            </Container>
          </div>
        </div>
      </div>
    );
  } else {
    console.log('data not found');
  }
};

export default JobDetail;
