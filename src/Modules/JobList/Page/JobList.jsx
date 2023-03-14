import { Container, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../../Components/Footer/Footer";
import NavBar from "../../../Components/NavBar/NavBar";
import noData from "../../../Images/Loading/49e58d5922019b8ec4642a2e2b9291c2.png";
import UserProfileHeader from "../../UserProfile/Components/Header/UserProfileHeader";
import CardListSkeleton from "../Components/CardListSkeleton/CardListSkeleton";
import JobListCards from "../Components/JobList__cards/JobList_Cards";
import {
  getJobGenres,
  getJobsById,
  getJobsByName,
} from "../Slices/JobListSlice";
import styles from "./JobList.module.scss";
const JobList = () => {
  const dispatch = useDispatch();
  const { jobsByName } = useSelector((state) => state.jobList);
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const { currentJobs } = useSelector((state) => state?.jobList);

  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(getJobsByName(inputValue)).unwrap();
      setInputValue("");
      navigate("/jobs");
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
    <div className={styles.jobList}>
      <div className={styles.jobList__container}>
        <div className={styles.jobList__header}>
          <UserProfileHeader
            color={true}
            onSubmit={handleSubmit}
            handleChange={handleChange}
            setInputValue={setInputValue}
          />
        </div>
        <div className={styles.jobList__navBar}>
          <NavBar handleSelect={handleSelectJobId} />
        </div>
        <div className={"mb-10"}>
          {jobsByName?.length === 0 && (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                alt="no data found"
                src={noData}
                style={{ width: "500px" }}
              />
            </div>
          )}
          {isLoading ? (
            <CardListSkeleton length={jobsByName?.length} />
          ) : (
            <JobListCards jobsByName={jobsByName} />
          )}
        </div>
        <Divider />
        <ScrollToTop smooth width={"30px"} height={"30px"} color={"#1dbf73"} />
        <div className={styles.jobList__footer}>
          <Container>
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default JobList;
