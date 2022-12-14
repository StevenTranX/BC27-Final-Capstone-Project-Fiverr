import React from 'react';
import { Divider, Button } from '@mui/material';
import styles from './BioTags.module.scss';
import { Link } from 'react-router-dom';
import Profile__DatePicker from '../Dialog/Profile__DatePicker';
import Profile__Dialog from '../Dialog/Profile__DatePicker';
const BioTag__Gender = (props) => {
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
    form,
    label,
    name,
    headerTitle,
    headerContent,
    type,
  } = props;
  return (
    <div className={styles.bio}>
      <header className={styles.bio__header}>
        <div className={styles.bio__col}>
          <h3>{leftHeader}</h3>
        </div>
        <div className={styles.bio__col}>
          <Link onClick={handleClickOpen}>{rightHeader}</Link>
          <Profile__DatePicker
            form={form}
            label={label}
            name={name}
            open={open}
            onClose={handleClose}
            headerContent={headerContent}
            headerTitle={headerTitle}
            type="date"
          />
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

export default BioTag__Gender;
