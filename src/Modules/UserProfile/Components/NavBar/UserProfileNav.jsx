import {
  Box,
  Container,
  Divider,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './UserProfileNav.module.scss';
const UserProfileNav = () => {
  const { currentJobs } = useSelector((state) => state?.jobList);
  return (
    <div className={styles.userProfileNav}>
      <Container className={styles.userProfileNav__container}>
        <Box>
          <MenuList className={styles.userProfileNav__list}>
            <nav className={styles.userProfileNav__listNav}>
              {currentJobs.map((job) => {
                return (
                  <MenuItem
                    key={job.id}
                    className={styles.userProfileNav__item}
                  >
                    {job.tenLoaiCongViec}
                  </MenuItem>
                );
              })}

              {/* <MenuItem
                className={styles.userProfileNav__item}
              >{`Digital Marketing`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item}
              >{`Writing & Translation`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item}
              >{`Video & Animation`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item}
              >{`Music & Audio`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item}
              >{`Programming & Tech`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item}
              >{`Business`}</MenuItem> */}
            </nav>
            {/* <nav className={styles.userProfileNav__listNav2}>
              <MenuItem
                className={styles.userProfileNav__item2}
              >{`Lifestyle`}</MenuItem>
              <MenuItem
                className={styles.userProfileNav__item2}
              >{`Trending`}</MenuItem>
            </nav> */}
          </MenuList>
        </Box>
      </Container>
      <Divider />
    </div>
  );
};

export default UserProfileNav;
