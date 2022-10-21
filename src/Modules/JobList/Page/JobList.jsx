import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import UserProfileHeader from '../../UserProfile/Components/Header/UserProfileHeader';
import UserProfileNav from '../../UserProfile/Components/NavBar/UserProfileNav';
import JobList__Cards from '../Components/JobList__cards/JobList__Cards';
import { getJobGenres } from '../Slices/JobListSlice';
import styles from './JobList.module.scss';
const JobList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobGenres()).unwrap();
  }, []);
  const { currentJobs } = useSelector((state) => state?.jobList);
  console.log(currentJobs);
  return (
    <div className={styles.jobList}>
      <div className={styles.jobList__container}>
        <div className={styles.jobList__header}>
          <UserProfileHeader />
        </div>
        <div className={styles.jobList__navBar}>
          <NavBar />
        </div>
        <div className={styles.jobList__cards}>
          <JobList__Cards />
        </div>
      </div>
    </div>
  );
};

export default JobList;
