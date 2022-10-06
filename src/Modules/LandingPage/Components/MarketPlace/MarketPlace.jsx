import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import styles from './MarketPlace.module.scss';
const MarketPlace = () => {
  return (
    <section className={styles.marketPlace}>
      <Container>
        <header className={styles.marketPlace__header}>
          <h2>Explore the Marketplace</h2>
        </header>
        <div className={styles.marketPlace__items}>
          <Box>
            <Grid
              container
              spacing={10}
              flexWrap={'nowrap'}
              className={styles.gridContainer}
            >
              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              flexWrap={'nowrap'}
              className={styles.gridContainer}
            >
              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>

              <Grid item className={styles.marketPlace__gridItem}>
                <div className={styles.marketPlace__item}>
                  <a>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                      alt=""
                    />
                  </a>
                  <p> {`Graphics & Design`} </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default MarketPlace;
