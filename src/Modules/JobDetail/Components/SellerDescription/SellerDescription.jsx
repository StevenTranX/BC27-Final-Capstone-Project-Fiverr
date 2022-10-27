import React from 'react';
import { Box, Stack, Grid, Avatar, Button, Divider } from '@mui/material';
import styles from './SellerDescription.module.scss';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SellerDescription = () => {
  return (
    <>
      <div className={styles.sellerDescription}>
        <header>
          <h2>About the Seller</h2>
        </header>
        <Box
          className={styles.seller__container}
          sx={{ display: 'flex' }}
          alignItems='center'
          marginBottom={'100px'}
        >
          <Stack
            className={styles.seller__avatar}
            sx={{
              marginRight: '10px',
              width: '111px',
              height: '111px',
            }}
          >
            <Avatar />
          </Stack>
          <Stack className={styles.seller__shortDesc}>
            <Stack className={styles.seller__title}>
              <Grid container flexDirection={'column'} spacing={0.6}>
                <Grid item sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {' '}
                  name here
                </Grid>
                <Grid item sx={{ fontSize: '19px' }} marginBottom='10px'>
                  {' '}
                  job name
                </Grid>
                <Grid container alignItems='center' color={'#ffb33e'}>
                  {' '}
                  <Grid item>
                    {' '}
                    <StarIcon />{' '}
                  </Grid>
                  <Grid item>
                    {' '}
                    <StarIcon />{' '}
                  </Grid>
                  <Grid item>
                    {' '}
                    <StarIcon />{' '}
                  </Grid>
                  <Grid item>
                    {' '}
                    <StarIcon />{' '}
                  </Grid>
                  <Grid item>
                    {' '}
                    <StarIcon />{' '}
                  </Grid>
                  <Grid item>
                    {' '}
                    <span> ( number ) </span>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
            <Stack marginTop='25px'>
              <Button variant='outlined'>Contact Me</Button>
            </Stack>
          </Stack>
        </Box>
      </div>
      <Box className={styles.seller__faq} marginBottom={'100px'}>
        <Stack sx={{ fontWeight: 700, fontSize: '20px', marginBottom: '35px' }}>
          FAQ
        </Stack>
        <Accordion sx={{ margin: '10px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
              Do you fix errors related Laravel framework ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No I can only fix core Php ,MySQL an other web related issues.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: '10px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
              Do you fix the issue through screen sharing using TeamViewer or
              Any desk?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No. I will not fix the issue through any screen-sharing tool. I
              will only fix the website issue if you provide me cPanel or FTP
              details. If you are facing the issue in your localhost server then
              you have to send me complete script
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: '10px 0px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
              Are the prices fixed for all kind of tasks/packages?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The gig prices are not fixed and will vary with the complexity of
              the task. I can also do in 5$ and it is vary with the nature of
              the issue
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default SellerDescription;
