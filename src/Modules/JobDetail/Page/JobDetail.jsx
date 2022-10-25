import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../Components/Footer/Footer';
import NavBar from '../../../Components/NavBar/NavBar';
import UserProfileHeader from '../../UserProfile/Components/Header/UserProfileHeader';
import JobList__Cards from '../../JobList/Components/JobList__cards/JobList__Cards';
import styles from './JobDetail.module.scss';
import {
  getJobsByName,
  getJobGenres,
  getJobsById,
} from '../../JobList/Slices/JobListSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import noData from '../../../Images/Loading/49e58d5922019b8ec4642a2e2b9291c2.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
const JobDetail = () => {
  const dispatch = useDispatch();
  const { jobsByName } = useSelector((state) => state.jobList);
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const { currentJobs } = useSelector((state) => state?.jobList);

  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();
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

  const handleSelectJobId = async (jobId) => {
    try {
      await dispatch(getJobsById(jobId)).unwrap();
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
  return (
    <div className={styles.jobDetail}>
      <div className={styles.jobDetail__container}>
        <div className={styles.jobDetail__header}>
          <UserProfileHeader
            onSubmit={handleSubmit}
            handleChange={handleChange}
            setInputValue={setInputValue}
          />
        </div>
        <div className={styles.jobDetail__navBar}>
          <NavBar handleSelect={handleSelectJobId} />
        </div>
        <Container>
          <div className={styles.jobDetail__mainContent}>
            <div className={styles.mainContent__wrapper}>
              <div className={styles.mainContent__onGoingNav}>
                <Box
                  sx={{
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                      pl: 1.3,
                    },
                  }}
                >
                  <Link underline='hover' href='#'>
                    Programming & Tech
                  </Link>
                  <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                  <Link underline='hover' href='#'>
                    Programming & Tech
                  </Link>
                  <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                  <Link underline='hover' href='#'>
                    Programming & Tech
                  </Link>
                </Box>
              </div>
              <div className={styles.mainContent__header}>
                <h2>
                  I will fix php script, mysql errors, mysql database issues and
                  bugs
                </h2>
              </div>
              <div className={styles.mainContent__subHeader}>
                <Box display={'flex'} className={styles.mainContent__row}>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    className={styles.mainContent__col}
                  >
                    <Avatar className={styles.mainContent__avatar}></Avatar>
                    <h4 className={styles.mainContent__item}>Name Here</h4>
                    <span className={styles.mainContent__item}>
                      Level 2 Seller{' '}
                    </span>
                    <span className={styles.mainContent__item}>|</span>
                  </Stack>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    className={styles.mainContent__col}
                  >
                    <Grid container spacing={1} alignItems='center'>
                      <Grid item color='#ffb33e'>
                        {' '}
                        <StarIcon />
                      </Grid>
                      <Grid color='#ffb33e' item>
                        {' '}
                        <StarIcon />
                      </Grid>
                      <Grid color='#ffb33e' item>
                        {' '}
                        <StarIcon />
                      </Grid>
                      <Grid item color='#ffb33e'>
                        {' '}
                        <StarIcon />
                      </Grid>
                      <Grid item color='#ffb33e'>
                        {' '}
                        <StarIcon />
                      </Grid>
                      <Grid item color='#ffb33e'>
                        {' '}
                        5{' '}
                      </Grid>
                      <Grid item> ( 174 )</Grid>
                    </Grid>
                  </Stack>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    className={styles.mainContent__col}
                  >
                    <Grid container>
                      <Grid item> 1 Order in Queue </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </div>
              <Divider />
              <div className={styles.mainContent__jobAvatar}>
                <img src='' alt='' />
              </div>
              <div className={styles.mainContent__gigDescription}>
                <header>
                  <h2>About This Gig</h2>
                </header>
                <div className={styles.gigDescription__wrapper}>
                  <div className={styles.gigDescription__content}>
                    <p>
                      <strong>
                        <u>FIX PHP/PHP MYSQ/LMYSQL DATABASE/PHP/CUSTOM PHP</u>
                      </strong>
                      <br></br>
                    </p>
                    <p>
                      Hi, If you are facing issues related to Php, MYSQL ,
                      Database integration or any other issues related to
                      website and wanted to fix these issues then I am available
                      and I will try my best to resolve your issues immediately
                      .The details of my services are provided as follows.
                    </p>
                    <br></br>
                    <p>
                      <strong>My Gig Services:</strong>
                    </p>
                    <List
                      component='nav'
                      aria-labelledby='nested-list-subheader'
                      subheader={
                        <ListSubheader
                          component='div'
                          id='nested-list-subheader'
                        >
                          Nested List Items
                        </ListSubheader>
                      }
                    >
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                      <ListItemText primary='Sent mail' />
                    </List>
                    <p>
                      <strong>
                        <u>FIX PHP/PHP MYSQ/LMYSQL DATABASE/PHP/CUSTOM PHP</u>
                      </strong>
                      <br></br>
                    </p>
                    <Divider />
                    <MenuList>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                      <MenuItem>Development</MenuItem>
                    </MenuList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Divider />
        <div className={styles.jobDetail__footer}>
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

export default JobDetail;
