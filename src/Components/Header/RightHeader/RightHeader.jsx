import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginMain from "../../../TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain";
import RegisterMain from "../../../TranTrongTin-Authentication/Register/Components/RegisterMain";
import {
  closeModal,
  openModal,
} from "../../../TranTrongTin-Authentication/slices/authSlice";
import styles from "./RightHeader.module.scss";
import UserDropdown from "./UserDropdown";

export const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

const RightHeader = ({ becomeSeller, color }) => {
  const { isOpenModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [mode, setMode] = useState(MODE.LOGIN);
  const { currentUser } = useSelector((state) => state.auth);
  const isLoggedIn = !!currentUser?.id;

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleOpen = () => {
    dispatch(openModal());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography
            sx={{ cursor: "pointer" }}
            className={`${!color && styles.nav__light} text-3xl font-semibold `}
          >
            {becomeSeller}
          </Typography>
          {!isLoggedIn && (
            <>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => {
                  handleOpen();
                  setMode(MODE.LOGIN);
                }}
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  "&:hover": {
                    color: "#1dbf73",
                  },
                  fontSize: "16px",
                }}
                className={color && styles.signin__button}
              >
                Sign In
              </Button>
              <Button
                style={{ textTransform: "none" }}
                disabled={false}
                variant="outlined"
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1dbf73",
                    borderColor: "#1dbf73",
                  },
                  color: "#fff",
                  borderColor: "#fff",
                  fontSize: "16px",
                }}
                className={color && styles.join__button}
              >
                Join
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
              <UserDropdown
                open={openMenu}
                handleClick={handleDropdown}
                handleClose={handleCloseDropdown}
                anchorEl={anchorEl}
              />
              <Button
                disabled={true}
                variant="outlined"
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
                sx={{
                  width: "70px",
                  height: "30px",
                }}
              >
                Join
              </Button>
            </>
          )}

          {mode === MODE.LOGIN && (
            <Dialog open={isOpenModal} onClose={handleClose}>
              <div className="w-full relative">
                <span onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 absolute top-3 right-3 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <LoginMain sx={{ color: "#000" }} onClose={handleClose} />
                <Box
                  textAlign="center"
                  justifyContent="center"
                  sx={{ position: "relative" }}
                >
                  <Button
                    onClick={() => {
                      setMode(MODE.REGISTER);
                    }}
                    color="secondary"
                    sx={{ fontSize: "13px" }}
                    className="hover:text-underline"
                  >
                    Don't have an account ? Register here
                  </Button>
                </Box>
              </div>
            </Dialog>
          )}

          {mode === MODE.REGISTER && (
            <Dialog open={isOpenModal} onClose={handleClose}>
              <div className="w-full relative">
                <span onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 absolute top-3 right-3 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
                <RegisterMain sx={{ color: "#000" }} onClose={handleClose} />
                <Box textAlign="center" justifyContent="center">
                  <Button
                    className="hover:text-underline"
                    onClick={() => {
                      setMode(MODE.LOGIN);
                    }}
                    color="secondary"
                    sx={{ fontSize: "13px" }}
                  >
                    Already have an account ? Login here
                  </Button>
                </Box>
              </div>
            </Dialog>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default RightHeader;
