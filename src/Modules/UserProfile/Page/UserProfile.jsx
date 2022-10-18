import React from 'react';
import UserProfileHeader from '../Components/Header/UserProfileHeader';
import Profile from '../Components/Profile/Profile';
import UserProfileNav from '../Components/NavBar/UserProfileNav';
import ActiveGig from '../Components/ActiveGig/ActiveGig';
import styles from './UserProfile.module.scss';
import { Container } from '@mui/system';
const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <div>
        <UserProfileHeader className={styles.userProfile__header} />
      </div>
      <div>
        <UserProfileNav className={styles.userProfile__nav} />
      </div>
      <div className={styles.userProfile__body}>
        <Container>
          <div className={styles.userProfile__body_wrapper}>
            <Profile className={styles.userProfile__body_mainContent} />
            <ActiveGig className={styles.userProfile__body_activeGig} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UserProfile;
