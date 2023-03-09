import {
  Box,
  Button,
  Container,
  Grid,
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
const StyledInput = styled(TextField)({
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
const SliderHeader = () => {
  const { isLoading, error } = useSelector((state) => state.jobList.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, control } = useForm({
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
          <Box fullWidth height={"60px"}>
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
                  }}
                >
                  <Controller
                    control={control}
                    name="searchContent"
                    render={({ field }) => (
                      <StyledInput
                        className={styles.inputField}
                        sx={{
                          border: "none",
                          height: "52px",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        }}
                        type="text"
                        size="small"
                        placeholder={`Try "design"`}
                        {...field}
                      ></StyledInput>
                    )}
                  ></Controller>
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
              <Grid item>
                <StyledOutlinedButton
                  onClick={handleSubmit(async () => {
                    await dispatch(getJobsByName("website")).unwrap();
                    navigate("/jobs");
                  })}
                  variant="outlined"
                >
                  Website Design
                </StyledOutlinedButton>
              </Grid>
              <Grid item>
                <StyledOutlinedButton
                  onClick={handleSubmit(async () => {
                    await dispatch(getJobsByName("marketing")).unwrap();
                    navigate("/jobs");
                  })}
                  variant="outlined"
                >
                  Marketing
                </StyledOutlinedButton>
              </Grid>
              <Grid item>
                <StyledOutlinedButton
                  onClick={handleSubmit(async () => {
                    await dispatch(getJobsByName("logo")).unwrap();
                    navigate("/jobs");
                  })}
                  variant="outlined"
                >
                  Logo Design
                </StyledOutlinedButton>
              </Grid>
              <Grid item>
                <StyledOutlinedButton
                  onClick={handleSubmit(async () => {
                    await dispatch(getJobsByName("video")).unwrap();
                    navigate("/jobs");
                  })}
                  variant="outlined"
                >
                  Video Editing
                </StyledOutlinedButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default SliderHeader;
