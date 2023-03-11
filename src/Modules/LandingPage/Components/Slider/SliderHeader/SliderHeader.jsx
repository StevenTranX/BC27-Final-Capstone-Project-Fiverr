import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { getJobsByName } from "../../../../JobList/Slices/JobListSlice";
import styles from "./SliderHeader.module.scss";
import { useForm, Controller } from "react-hook-form";
const StyledButton = styled(Button)({
  boxShadow: "none",
  backgroundColor: "#1dbf73",
  textTransform: "none",
  "&:hover": {
    opacity: 0.8,
  },
  borderStartStartRadius: "0px",
  borderBottomLeftRadius: "0px",
  fontSize: "16px",
});
const StyledInput = styled(Input)({
  "&:hover": {
    border: "none",
    borderRadius: "none",
  },

  borderTopRightRadius: "0px",
  borderBottomRightRadius: "0px",
  border: "none",
  backgroundColor: "#fff",
  cursor: "pointer",
});
const StyledOutlinedButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    opacity: 0.9,
    borderColor: "#fff",
    backgroundColor: "#fff",
    color: "#404145",
  },
  borderRadius: "50px",
  border: "1px #fff solid",
  color: "#000",
  height: "26px",
  color: "#fff",
  cursor: "pointer",
});

const suggestiveButtons = [
  {
    id: 1,
    title: "Website Design",
  },
  {
    id: 2,
    title: "Marketing",
  },
  {
    id: 3,
    title: "Logo Design",
  },
  {
    id: 4,
    title: "Video Editing",
  },
];
const SliderHeader = () => {
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      searchContent: "",
    },
  });

  const onSubmitSearch = handleSubmit(async (data) => {
    console.log(data);
    try {
      await dispatch(getJobsByName(data.searchContent)).unwrap();
      navigate("/jobs");
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  });
  return (
    <Container className={styles.sliderHeader}>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <Box
          maxWidth={"600px"}
          height={"222px"}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{ marginBottom: "18px", color: "#fff" }}
          >
            Find the perfect <i>freelance</i> services for your business
          </Typography>
          <Box height={"60px"}>
            <form onSubmit={onSubmitSearch}>
              <Grid container>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sx={{
                    borderTopLeftRadius: "6px",
                    borderBottomLeftRadius: "6px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Controller
                    control={control}
                    name="searchContent"
                    render={({ field }) => (
                      <StyledInput
                        variant="standard"
                        className={styles.inputField}
                        sx={{
                          border: "none",
                          height: "55px",
                          padding: "0px 40px",
                          paddingTop: "5px",
                          "&:before": {
                            borderBottom: "none",
                          },
                        }}
                        size="small"
                        placeholder={`Try "design"`}
                        {...field}
                      ></StyledInput>
                    )}
                  ></Controller>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Grid>
                <Grid item lg={2} md={2}>
                  <StyledButton
                    className={styles.searchButton}
                    sx={{
                      height: "100%",
                      backgroundColor: "#1dbf73",
                      "&:hover": {
                        backgroundColor: "#1dbf73",
                      },
                    }}
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    Search
                  </StyledButton>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "10px", color: "#fff" }}
            >
              <Grid item>
                <Typography> Popular:</Typography>
              </Grid>
              {suggestiveButtons.map((button) => (
                <Grid item key={button.id}>
                  <StyledOutlinedButton
                    onClick={handleSubmit(async () => {
                      await dispatch(getJobsByName(button.title)).unwrap();
                      navigate("/jobs");
                    })}
                    variant="outlined"
                  >
                    {button.title}
                  </StyledOutlinedButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default SliderHeader;
