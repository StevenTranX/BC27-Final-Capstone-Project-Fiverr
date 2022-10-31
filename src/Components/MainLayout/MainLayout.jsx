import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import LandingPage from '../../Modules/LandingPage/Pages/LandingPage';
import styles from './MainLayout.module.scss';
import UserProfileHeader from '../../Modules/UserProfile/Components/Header/UserProfileHeader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsByName } from '../../Modules/JobList/Slices/JobListSlice';
import Loading from '../Loading/Loading';
const MainLayout = () => {
  const [color, setColor] = useState(false);
  const handleChangeColor = () => {
    if (window.scrollY > 650) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const [inputValue, setInputValue] = React.useState('');
  const { isLoading } = useSelector((state) => state.jobList.settings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInputValue(event.target.value);
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
  window.addEventListener('scroll', handleChangeColor);
  {
    if (isLoading) {
      return <Loading isLoading={isLoading} />;
    } else {
      return (
        <div>
          <div className={styles.headerContainer}>
            {color ? (
              <UserProfileHeader
                color={color}
                setInputValue={setInputValue}
                handleChange={handleChange}
                onSubmit={handleSubmit}
              />
            ) : (
              <Header color={color} />
            )}
          </div>
          <LandingPage />
          <Container>
            <Footer />
          </Container>
        </div>
      );
    }
  }
};

export default MainLayout;
