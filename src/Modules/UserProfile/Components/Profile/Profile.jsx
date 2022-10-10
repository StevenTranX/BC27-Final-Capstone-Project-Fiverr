import { Container } from '@mui/material';
import React from 'react';
import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import Profile__Avatar from './Avatar/Profile__Avatar';
import EarnBadges from './EarnBadges/EarnBadges';

const Profile = () => {
  return (
    <div className={styles.MainContent}>
      <Container>
        <div className={styles.MainContentWrapper}>
          <Profile__Avatar />
          <EarnBadges />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
