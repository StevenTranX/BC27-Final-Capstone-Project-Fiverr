import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import styles from './Freelance.module.scss';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const Freelance = () => {
  return (
    <section>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h2> A whole world of freelance talent at your fingertips</h2>
            <div>
              {/* --------------------------------- */}
              <div>
                <div className={styles.contentHeader}>
                  <h6>
                    <CheckCircleOutlineOutlinedIcon />
                    The best for every budget
                  </h6>
                </div>
                <div className={styles.contentParagraph}>
                  <p>
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </div>
              </div>
              {/* --------------------------------- */}
              <div>
                <div className={styles.contentHeader}>
                  <h6>
                    <CheckCircleOutlineOutlinedIcon />
                    Quality work done quickly
                  </h6>
                </div>
                <div className={styles.contentParagraph}>
                  <p>
                    Find the right freelancer to begin working on your project
                    within minutes.
                  </p>
                </div>
              </div>
              {/* --------------------------------- */}
              <div>
                <div className={styles.contentHeader}>
                  <h6>
                    <CheckCircleOutlineOutlinedIcon />
                    Protected payments, every time
                  </h6>
                </div>
                <div className={styles.contentParagraph}>
                  <p>
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </div>
              </div>
              {/* --------------------------------- */}
              <div>
                <div className={styles.contentHeader}>
                  <h6>
                    <CheckCircleOutlineOutlinedIcon />
                    24/7 support
                  </h6>
                </div>
                <div className={styles.contentParagraph}>
                  <p>
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.video}>
            <div className={styles.videoWrapper}>
              <picture>
                <img
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                  alt="videoImage"
                ></img>
              </picture>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Freelance;
