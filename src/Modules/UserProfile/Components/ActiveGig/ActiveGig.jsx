import { Button } from '@mui/material';
import React from 'react';
import styles from './ActiveGig.module.scss';
import noGig from '../../../../Images/UserProfile/vector12.svg';
import CardLayout from '../../../../ReusableComponents/Profile_CardLayOut/CardLayout';
const ActiveGig = () => {
  return (
    <section className={styles.activeGig}>
      <div className={styles.activeGig__container}>
        <div className={styles.activeGig__container_header}>
          <h4>ACTIVE GIGS</h4>
        </div>
        <div className={styles.activeGig__container_body}>
          <div className={styles.activeGig__container_nonActive}>
            <div className={styles.nonActiveWrapper}>
              <div className={styles.nonActive_row}>
                <div className={styles.nonActive_col}>
                  <img src={noGig} alt="" srcset="" />
                  <h4>It seems that you don't have any active Gigs</h4>
                  <Button
                    sx={{
                      marginBottom: '20px',
                      backgroundColor: '#1dbf73',
                      textTransform: 'capitalize',
                    }}
                    variant="contained"
                  >
                    Create a new Gig
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveGig;
