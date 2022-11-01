import React, { useEffect } from 'react';
import UserProfileHeader from '../Components/Header/UserProfileHeader';
import Profile from '../Components/Profile/Profile';
import UserProfileNav from '../Components/NavBar/UserProfileNav';
import ActiveGig from '../Components/ActiveGig/ActiveGig';
import styles from './UserProfile.module.scss';
import { Container } from '@mui/system';
import Footer from '../../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from 'react-scroll-to-top';
import NavBar from '../../../Components/NavBar/NavBar';
import { getJobGenres, getJobsById } from '../../JobList/Slices/JobListSlice';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectJobId = async (jobId) => {
    try {
      await dispatch(getJobsById(jobId)).unwrap();
      navigate('/jobs');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(getJobGenres());
  }, []);
  return (
    <div className={styles.userProfile}>
      <div>
        <UserProfileHeader className={styles.userProfile__header} />
      </div>
      <div>
        <NavBar
          handleSelect={handleSelectJobId}
          className={styles.userProfile__nav}
        />
      </div>
      <div className={styles.userProfile__body}>
        <Container>
          <div className={styles.userProfile__body_wrapper}>
            <Profile className={styles.userProfile__body_mainContent} />
            <ActiveGig className={styles.userProfile__body_activeGig} />
          </div>
        </Container>
      </div>
      <div>
        <ScrollToTop smooth width={'30px'} height={'30px'} color={'#1dbf73'} />
      </div>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default UserProfile;
