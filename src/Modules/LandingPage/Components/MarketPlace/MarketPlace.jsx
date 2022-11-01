import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import styles from "./MarketPlace.module.scss";
const MarketPlace = () => {
  const data = [
    {
      id: 1,
      name: "Graphics & Design",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
    },
    {
      id: 2,
      name: "Digital Marketing",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
    },
    {
      id: 3,
      name: "Writing & Translation",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
    },
    {
      id: 4,
      name: "Video & Animation",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
    },
    {
      id: 5,
      name: "Music & Audio",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
    },
    {
      id: 6,
      name: "Programming & Tech",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
    },
    {
      id: 7,
      name: "Business",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
    },
    {
      id: 8,
      name: "Lifestyle",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
    },
    {
      id: 9,
      name: "Data",
      imgSrc:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
    },
   
  ];
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
              spacing={1}
        
            
              flexWrap={"wrap"}
              className={styles.gridContainer}
            >
              {data.map ((x) => {return (
                    <Grid item  key = {x.id} className={styles.marketPlace__gridItem} xs = {2.4}>
                    <div className={styles.marketPlace__item}>
                      <a href="#">
                        <img
                          src= {x.imgSrc}
                          alt= {x.name}
                        />
                      </a>
                      <p> {x.name} </p>
                    </div>
                  </Grid>
              )})}
          

            </Grid>
          </Box>
        </div>
      </Container>
      <Divider />
    </section>
  );
};

export default MarketPlace;
