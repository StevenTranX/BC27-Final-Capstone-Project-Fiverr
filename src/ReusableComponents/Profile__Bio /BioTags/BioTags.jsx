import React from 'react';
import { Divider } from '@mui/material';
import styles from './BioTags.module.scss';
import { Link } from 'react-router-dom';
const BioTags = (props) => {
  const { leftHeader, rightHeader, content, subContent, linkedContent } = props;
  return (
    <div className={styles.bio}>
      <header className={styles.bio__header}>
        <div className={styles.bio__col}>
          <h3>{leftHeader}</h3>
        </div>
        <div className={styles.bio__col}>
          <Link>{rightHeader}</Link>
        </div>
      </header>
      <div className={styles.bio__detail}>
        <span>
          <span>{content}</span> <span>{subContent}</span>
          <span>
            <Link>{linkedContent}</Link>
          </span>
        </span>
      </div>
      <Divider />
    </div>
  );
};

export default BioTags;
