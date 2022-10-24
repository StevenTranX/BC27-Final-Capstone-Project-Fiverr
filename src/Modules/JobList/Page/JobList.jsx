import { Container, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../Components/Footer/Footer';
import NavBar from '../../../Components/NavBar/NavBar';
import UserProfileHeader from '../../UserProfile/Components/Header/UserProfileHeader';
import JobList__Cards from '../Components/JobList__cards/JobList__Cards';
import styles from './JobList.module.scss';
import { getJobsByName, getJobGenres } from '../Slices/JobListSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import noData from '../../../Images/Loading/49e58d5922019b8ec4642a2e2b9291c2.png';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobsByName } = useSelector((state) => state.jobList);
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const { currentJobs } = useSelector((state) => state?.jobList);

  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
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
  // useEffect(() => {
  //   dispatch(getJobsByName(inputValue));
  // }, [handleSubmit]);
  useEffect(() => {
    dispatch(getJobGenres());
  }, []);
  console.log(currentJobs);
  return (
    <div className={styles.jobList}>
      <div className={styles.jobList__container}>
        <div className={styles.jobList__header}>
          <UserProfileHeader
            onSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.jobList__navBar}>
          <NavBar />
        </div>
        <div
          className={styles.jobList__cards}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          {jobsByName.length === 0 && (
            <div>
              <img
                alt='no data found'
                src={noData}
                style={{ width: '500px' }}
              />
            </div>
          )}
          {isLoading ? (
            <Loading isLoading={isLoading} />
          ) : (
            <JobList__Cards jobsByName={jobsByName} />
          )}
        </div>
        <Divider />
        <div className={styles.jobList__footer}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
  // } else {
  //   <div>Sorry there is nothing to show</div>;
  // }
};

export default JobList;
