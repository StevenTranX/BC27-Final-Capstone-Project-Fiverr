import React from 'react';
import styles from './CardLayout.module.scss';
const CardLayout = ({ children }) => {
  return (
    <div className={styles.cardLayout}>
      <div className={styles.cardWrapper}>{children}</div>
    </div>
  );
};

export default CardLayout;
