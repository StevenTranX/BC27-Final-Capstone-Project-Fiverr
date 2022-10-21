import React from 'react';
import { Box, Grid, ListItem, ListItemText, MenuItem } from '@mui/material';
import styles from './NavMenu.module.scss';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { StyledBox } from '../../../Footer/Footer';
import { StyledLink } from '../../../Footer/CategoriesList/CategoriesList';
import { List } from '@mui/icons-material';
const NavMenu = (props) => {
  const { job } = props;
  console.log(job);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <MenuItem
        aria-describedby={id}
        onMouseOver={handleClick}
        className={styles.nav__item}
        disablePadding
        sx={{ marginLeft: '-12px' }}
      >
        {job.tenLoaiCongViec}
      </MenuItem>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
                            onClick={console.log(jobGenre.id)}
                            underline='hover'
                          >
                            <ListItemText
                              sx={{ fontSize: '16px' }}
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
      </Popover>
    </>
  );
};

export default NavMenu;
