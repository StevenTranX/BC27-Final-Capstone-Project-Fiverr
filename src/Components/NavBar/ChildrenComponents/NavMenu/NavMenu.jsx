import { Box, Grid, ListItem, ListItemText, MenuItem } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React from "react";
import { StyledLink } from "../../../Footer/CategoriesList/CategoriesList";
import { StyledBox } from "../../../Footer/Footer";
import styles from "./NavMenu.module.scss";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const NavMenu = (props) => {
  const { job, handleSelectById } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleSelect = (jobId) => {
    handleSelectById(jobId);
  };
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <MenuItem
        {...bindHover(popupState)}
        className={styles.nav__item}
        disablePadding
        sx={{ marginLeft: "-12px" }}
      >
        {job.tenLoaiCongViec}
      </MenuItem>
      <HoverPopover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <Box>
            <Grid container spacing={10}>
              {job.dsNhomChiTietLoai.map((jobGenres) => {
                return (
                  <Grid item>
                    <StyledBox>{jobGenres.tenNhom}</StyledBox>
                    {jobGenres.dsChiTietLoai.map((jobGenre) => {
                      return (
                        <ListItem disablePadding>
                          <StyledLink
                            onClick={() => handleSelect(jobGenre.id)}
                            underline="hover"
                          >
                            <ListItemText
                              sx={{ fontSize: "16px" }}
                              primary={jobGenre.tenChiTiet}
                            ></ListItemText>
                          </StyledLink>
                        </ListItem>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Typography>
      </HoverPopover>
    </>
  );
};

export default NavMenu;
