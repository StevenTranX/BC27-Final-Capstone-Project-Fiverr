import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Profile__Dialog from '../Dialog/Profile__Dialog';
import styles from './BioTags.module.scss';
const BioTag__Name = (props) => {
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
          <Profile__Dialog
            form={form}
            label={label}
            name={name}
            open={open}
            onClose={handleClose}
            headerContent={headerContent}
            headerTitle={headerTitle}
            type={type}
          />
        </div>
      </header>
      <div className={styles.bio__detail}>
        <span>
          <span>{children}</span>
          <span>{subContent}</span>
          <span>
            <Link>{linkedContent}</Link>
          </span>
        </span>
      </div>
      <Divider />
    </div>
  );
};

export default BioTag__Name;
