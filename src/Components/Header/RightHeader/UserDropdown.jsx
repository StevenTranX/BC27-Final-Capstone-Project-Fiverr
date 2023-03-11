import { AccountCircleRounded } from "@mui/icons-material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../TranTrongTin-Authentication/slices/authSlice";
import ConfirmLogout from "./ConfirmLogout";

export default function UserDropdown(props) {
  const { open, handleClick, handleClose, anchorEl } = props;
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AccountCircleRounded
              sx={{ width: "28px", height: "28px", color: "#25A1B0" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 12,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> {currentUser?.email}
        </MenuItem>
        <Link to={`/userProfile/${currentUser?.id}`}>
          <MenuItem
            sx={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <Button
            sx={{
              color: "#000",
              fontWeight: "400",
              padding: "0px",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
            onClick={() => {
              handleOpenDialog();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </Button>
        </MenuItem>
        <ConfirmLogout
          open={openDialog}
          onClose={handleCloseDialog}
          handleLogout={handleLogout}
          handleClose={handleClose}
        />
      </Menu>
    </React.Fragment>
  );
}
