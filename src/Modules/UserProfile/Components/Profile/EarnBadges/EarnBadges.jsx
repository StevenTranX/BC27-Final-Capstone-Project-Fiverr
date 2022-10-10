import { Button } from '@mui/material';
import React from 'react';
import styles from './EarnBadges.module.scss';
const EarnBadges = () => {
  return (
    <>
      <section className={styles.badge}>
        <div className={styles.badgeWrapper}>
          <header className={styles.badge__header}>
            <div className={styles.badge__logo}>
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
                alt="learn from fiverr"
              />
            </div>
          </header>
          <div className={styles.badge__item}>
            <div className={styles.badge__content}>
              <div className={styles.badge__contentWrapper}>
                <h5>Earn badges and stand out</h5>
                <p>Boost your sales, by boosting your expertise.</p>
                <Button
                  sx={{ marginBottom: '20px', backgroundColor: '#1dbf73' }}
                  variant="contained"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarnBadges;
