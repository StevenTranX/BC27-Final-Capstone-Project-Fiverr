import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginMain from "../../../TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain";
import RegisterMain from "../../../TranTrongTin-Authentication/Register/Components/RegisterMain";
import styles from "./RightHeader.module.scss";
import UserDropdown from "./UserDropdown";

const RightHeader = ({ becomeSeller, color }) => {
  const [open, setOpen] = React.useState(false);
  const MODE = {
    LOGIN: "login",
    REGISTER: "register",
  };
  const [mode, setMode] = useState(MODE.REGISTER);
  const { currentUser } = useSelector((state) => state.auth);
  const isLoggedIn = !!currentUser?.id;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Dialog open={open} onClose={handleClose}>
              <LoginMain sx={{ color: "#000" }} onClose={handleClose} />
              <Box textAlign="center" justifyContent="center">
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
            </Dialog>
          )}

          {mode === MODE.REGISTER && (
            <Dialog open={open} onClose={handleClose}>
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
            </Dialog>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default RightHeader;
