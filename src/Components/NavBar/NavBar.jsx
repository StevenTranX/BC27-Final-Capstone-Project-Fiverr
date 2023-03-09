import { Box, Container, Divider, MenuList } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobGenres } from "../../Modules/JobList/Slices/JobListSlice";
import NavMenu from "./ChildrenComponents/NavMenu/NavMenu";
import styles from "./NavBar.module.scss";
const NavBar = ({ handleSelect }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobGenres());
  }, []);
  const { currentJobs } = useSelector((state) => state?.jobList);
  if (currentJobs) {
    return (
      <div className={`${styles.nav} bg-white`}>
        <Container className={styles.nav__container}>
          <Box>
            <MenuList className={styles.nav__list}>
              <nav className={styles.nav__listNav}>
                {currentJobs.map((job) => {
                  return (
                    <NavMenu
                      handleSelectById={handleSelect}
                      job={job}
                      key={job.id}
                    />
                  );
                })}
              </nav>
            </MenuList>
          </Box>
        </Container>
        <Divider />
      </div>
    );
  }
};

export default NavBar;
