import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import CategoriesList from './CategoriesList/CategoriesList';
import AboutList from './AboutList/AboutList';
const Footer = () => {
  return (
    <>
      <footer>
        <Box>
          <Grid container spacing={13}>
            <Grid item>
              <Box sx={{ fontWeight: 700 }}>Categories</Box>
              <Box>
                <nav>
                  <CategoriesList />
                </nav>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ fontWeight: 700 }}>About</Box>
              <Box>
                <nav>
                  <AboutList />
                </nav>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
