import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../Components/NavBar/NavBar';
import UserProfileHeader from '../../UserProfile/Components/Header/UserProfileHeader';
import UserProfileNav from '../../UserProfile/Components/NavBar/UserProfileNav';
import { getJobGenres } from '../Slices/JobListSlice';

const JobList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobGenres()).unwrap();
  }, []);
  const { currentJobs } = useSelector((state) => state?.jobList);
  console.log(currentJobs);
  return (
    <div>
      <div>
        <UserProfileHeader />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default JobList;
