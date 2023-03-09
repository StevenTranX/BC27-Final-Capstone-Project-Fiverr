/* eslint-disable no-lone-blocks */
import { Container } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getJobsById,
  getJobsByName,
} from "../../Modules/JobList/Slices/JobListSlice";
import LandingPage from "../../Modules/LandingPage/Pages/LandingPage";
import UserProfileHeader from "../../Modules/UserProfile/Components/Header/UserProfileHeader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import styles from "./MainLayout.module.scss";
const MainLayout = () => {
  const [color, setColor] = useState(false);
  const handleChangeColor = () => {
    if (window.scrollY > 650) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const [inputValue, setInputValue] = React.useState("");
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
      setInputValue("");
      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectJobId = async (jobId) => {
    try {
      await dispatch(getJobsById(jobId)).unwrap();
      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  };
  window.addEventListener("scroll", handleChangeColor);
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
              >
                <NavBar handleSelect={handleSelectJobId} />
              </UserProfileHeader>
            ) : (
              <Header color={color}></Header>
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
