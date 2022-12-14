import React from 'react';
import { Divider, Button } from '@mui/material';
import styles from './BioTags.module.scss';
import { Link } from 'react-router-dom';
import Profile__Dialog from '../Dialog/Profile__Dialog';
import InputField from '../../FormControl/InputField/InputField';
const BioTags = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    leftHeader,
    rightHeader,
    content,
    subContent,
    linkedContent,
    headerContent,
    headerTitle,
    placeholder,
    form,
    children,
  } = props;
  return (
    <div className={styles.bio}>
      <header className={styles.bio__header}>
        <div className={styles.bio__col}>
          <h3>{leftHeader}</h3>
        </div>
        <div className={styles.bio__col}>
          <Link onClick={handleClickOpen}>{rightHeader}</Link>
          <InputField />
        </div>
      </header>
      <div className={styles.bio__detail}>
        {children}
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
