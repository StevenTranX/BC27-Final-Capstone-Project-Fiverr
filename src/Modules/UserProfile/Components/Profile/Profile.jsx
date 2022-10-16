import { Container } from '@mui/material';
import React from 'react';
import styles from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Profile__Avatar from './Avatar/Profile__Avatar';
import EarnBadges from './EarnBadges/EarnBadges';
import Profile__Bio from './Bio/Profile__Bio';
import CardLayout from '../../../../ReusableComponents/Profile_CardLayOut/CardLayout';
import ShareActivity from './ShareActivity/ShareActivity';
import { updateUser } from '../../Slices/userProfileSlice';
import { useSnackbar } from 'notistack';
const Profile = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(updateUser(values))
        .unwrap()
        .then(() => {
          enqueueSnackbar('User Updated', { variant: 'success' });
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div className={styles.MainContent}>
      <Container>
        <div className={styles.MainContentWrapper}>
          <Profile__Avatar />
          <EarnBadges />
          <Profile__Bio onSubmit={handleSubmit} />
          <ShareActivity />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
