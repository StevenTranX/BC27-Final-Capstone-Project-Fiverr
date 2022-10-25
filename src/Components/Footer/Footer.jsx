import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import custom from '../../Images/LandingPage/vector12.svg';
import logo from '../../Images/LandingPage/vector15.svg';
import AboutList from './AboutList/AboutList';
import CategoriesList from './CategoriesList/CategoriesList';
import CommunityList from './CommunityList/CommunityList';
import styles from './Footer.module.scss';
import MoreFromFiverrList from './MoreFromFiverrList/MoreFromFiverrList';
import SupportList from './SupportList/SupportList';
export const StyledBox = styled(
  Box,
  {}
)({
  fontWeight: 600,
  fontSize: '17px',
  marginBottom: '10px',
  color: '#404145',
});
const Footer = () => {
  return (
    <>
      <div className={styles.landingFooter}>
        <footer className={styles.footer}>
          <Box>
            <Grid container spacing={10}>
              <Grid item>
                <StyledBox>Categories</StyledBox>
                <Box>
                  <nav>
                    <CategoriesList />
                  </nav>
                </Box>
              </Grid>
              <Grid item>
                <StyledBox>About</StyledBox>
                <Box>
                  <nav>
                    <AboutList />
                  </nav>
                </Box>
              </Grid>
              <Grid item>
                <StyledBox>Support</StyledBox>
                <Box>
                  <nav>
                    <SupportList />
                  </nav>
                </Box>
              </Grid>
              <Grid item>
                <StyledBox>Community</StyledBox>
                <Box>
                  <nav>
                    <CommunityList />
                  </nav>
                </Box>
              </Grid>
              <Grid item>
                <StyledBox>More from Fiverr</StyledBox>
                <Box>
                  <nav>
                    <MoreFromFiverrList />
                  </nav>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </footer>
        <Divider />
        <footer className={styles.subFooter}>
          <Grid
            container
            flexDirection='row'
            justifyContent='space-between'
            marginTop='30px'
            component='div'
          >
            <Grid item>
              <Grid container spacing={3} flexDirection='row'>
                <Grid item marginBottom='5px' alignItems='center'>
                  <img width='91' height='27' src={logo} />
                </Grid>
                <Grid item marginTop='8px'>
                  <Typography color='#b5b6ba'>
                    © Fiverr International Ltd. 2022
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              flexDirection='row'
              sx={{ display: 'flex' }}
              justifyContent='space-between'
            >
              <Grid
                container
                flexDirection='row'
                spacing={3}
                justifyContent='space-between'
                flexWrap='nowrap'
                marginRight={5}
              >
                <Grid item>
                  <TwitterIcon
                    sx={{ width: '25px', height: '25px', color: '#74767e' }}
                  />
                </Grid>
                <Grid item>
                  <FacebookIcon
                    sx={{ width: '25px', height: '25px', color: '#74767e' }}
                  />
                </Grid>
                <Grid item>
                  <LinkedInIcon
                    sx={{ width: '25px', height: '25px', color: '#74767e' }}
                  />
                </Grid>
                <Grid item>
                  <PinterestIcon
                    sx={{ width: '25px', height: '25px', color: '#74767e' }}
                  />
                </Grid>
                <Grid item>
                  <InstagramIcon
                    sx={{ width: '25px', height: '25px', color: '#74767e' }}
                  />
                </Grid>
              </Grid>
              {/* <Grid item> */}
              <Grid
                container
                sx={{ display: 'flex' }}
                flexDirection='row'
                alignItems='center'
                justifyContent='space-around'
                spacing={2}
              >
                <Grid item>
                  <Typography color='#74767e' alignItems='center'>
                    <LanguageIcon
                      sx={{
                        color: '#74767e',
                        fontSize: '18px',
                        marginRight: '7px',
                      }}
                    />
                    English
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color='#74767e'>US$ USD</Typography>
                </Grid>
                <Grid item>
                  <img src={custom} />
                </Grid>
              </Grid>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </footer>
      </div>
    </>
  );
};

export default Footer;
