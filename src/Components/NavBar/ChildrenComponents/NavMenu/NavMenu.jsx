import { Box, Grid, ListItem, ListItemText, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  bindHover,
  bindPopover,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import React from "react";
import { useDispatch } from "react-redux";
import { StyledLink } from "../../../Footer/CategoriesList/CategoriesList";
import { StyledBox } from "../../../Footer/Footer";
import styles from "./NavMenu.module.scss";

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
        <Box sx={{ p: 2 }}>
          <Grid container spacing={10}>
            {job.dsNhomChiTietLoai.map((jobGenres) => {
              return (
                <Grid item key={jobGenres.id}>
                  <StyledBox>{jobGenres.tenNhom}</StyledBox>
                  {jobGenres.dsChiTietLoai.map((jobGenre) => {
                    return (
                      <ListItem key={jobGenre.id} disablePadding>
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
      </HoverPopover>
    </>
  );
};

export default NavMenu;
