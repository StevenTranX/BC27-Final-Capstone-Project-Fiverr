import { CleaningServices } from '@mui/icons-material';
import { Box, Grid, ListItem, ListItemText, MenuItem } from '@mui/material';
import {
  bindHover,
  bindPopover,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../../Footer/CategoriesList/CategoriesList';
import { StyledBox } from '../../../Footer/Footer';
import styles from './NavMenu.module.scss';

const NavMenu = (props) => {
  const { job, handleSelectById } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleSelect = (jobId) => {
    handleSelectById(jobId);
  };
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });
  return (
    <>
      <MenuItem
        {...bindHover(popupState)}
        className={styles.nav__item}
        sx={{ marginLeft: '-12px' }}
      >
        {job.tenLoaiCongViec}
      </MenuItem>
      {job && (
        <HoverPopover
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box sx={{ p: 2 }}>
            <Grid container spacing={10}>
              {job.dsNhomChiTietLoai.length !== 0 ? (
                job.dsNhomChiTietLoai.map((jobGenres) => (
                  <Grid item key={jobGenres.id}>
                    <StyledBox>{jobGenres.tenNhom}</StyledBox>
                    {jobGenres.dsChiTietLoai.map((jobGenre) => {
                      return (
                        <ListItem key={jobGenre.id} disablePadding>
                          <StyledLink
                            onClick={() => handleSelect(jobGenre.id)}
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
                ))
              ) : (
                <ListItem className='flex items-center justify-center ml-[80px] mt-[30px]'>
                  <img
                    className='object-cover w-[200px]'
                    src='https://t4.ftcdn.net/jpg/04/72/65/73/360_F_472657366_6kV9ztFQ3OkIuBCkjjL8qPmqnuagktXU.jpg'
                    alt='noData'
                  />
                </ListItem>
              )}
            </Grid>
          </Box>
        </HoverPopover>
      )}
    </>
  );
};

export default NavMenu;
