import React from 'react';
import UserProfileHeader from '../Components/Header/UserProfileHeader';
import Profile from '../Components/Profile/Profile';
import UserProfileNav from '../Components/NavBar/UserProfileNav';
import styles from './UserProfile.module.scss';
const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <div>
        <UserProfileHeader className={styles.userProfileHeader} />
      </div>
      <div>
        <UserProfileNav className={styles.userProfileNav} />
      </div>
      <div>
        <Profile className={styles.userProfileMainContent} />
      </div>
    </div>
  );
};

export default UserProfile;
