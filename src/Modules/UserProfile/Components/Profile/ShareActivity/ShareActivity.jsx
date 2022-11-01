import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardLayout from '../../../../../ReusableComponents/Profile_CardLayOut/CardLayout';
import BioTags from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTags';
import { getBookingJobs } from '../../../Slices/userProfileSlice';
import styles from './ShareActivity.module.scss';
const ShareActivity = () => {
  const { userBookingJobs } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingJobs());
  }, []);
  console.log(userBookingJobs);
  return (
    <div className={styles.shareActivity}>
      {userBookingJobs?.length === 0 ? (
        <CardLayout>
          <BioTags
            leftHeader='Shared activity information'
            content='In order to provide the best possible work and service, some information about your activity on Fiverr may be shared with sellers.'
            linkedContent='Manage settings'
          />
        </CardLayout>
      ) : (
        <h1>Booking Jobs here</h1>
      )}
    </div>
  );
};

export default ShareActivity;
