import React from 'react';
import styles from './JobList__Cards.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import img from '../../../../Images/LandingPage/illustration-2x.png';
const JobList__Cards = () => {
  return (
    <div className={styles.cards}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.cards__row}>
            <div className={styles.cards__col}>
              <Grid container>
                <Grid item>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component='img'
                      height='140'
                      image=''
                      alt='green iguana'
                    />
                    <CardContent>
                      <div className={styles.col__header}>
                        <div className={styles.col__avatar}>
                          <Avatar
                            alt='Remy Sharp'
                            src='/static/images/avatar/1.jpg'
                          />
                        </div>
                        <div className={styles.col__name}>
                          <h6>name here</h6>
                          <h5>Level 1</h5>
                        </div>
                      </div>
                      <Typography variant='body2' color='text.secondary'>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small'>Share</Button>
                      <Button size='small'>Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobList__Cards;
