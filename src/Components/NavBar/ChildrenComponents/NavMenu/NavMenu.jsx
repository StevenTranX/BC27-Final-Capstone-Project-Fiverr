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
      >
        <a>{job.tenLoaiCongViec}</a>
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
                    <List>
                      {jobGenres.dsChiTietLoai.map((jobGenre) => {
                        return (
                          <nav>
                            <a> {jobGenre.tenChiTiet}</a>
                          </nav>
                        );
                      })}
                    </List>
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
