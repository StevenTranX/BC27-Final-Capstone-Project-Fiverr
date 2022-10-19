import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Button, Divider } from '@mui/material';
import styles from './Profile__Avatar.module.scss';
import { useSelector } from 'react-redux';
const Profile__Avatar = () => {
  const { currentUser } = useSelector((state) => state?.user);
  return (
    <>
      <div className={styles.userAvatar}>
        <div className={styles.userAvatarWrapper}>
          <div className={styles.userContentWrapper}>
            <div className={styles.profile__label_top}>
              <div className={styles.profile__label_status}>
                <i>.</i>
                <span>Online</span>
              </div>
              <div className={styles.camera__icon}>
                <Avatar className={styles.camera__image}>N</Avatar>
              </div>
              <div className={styles.profile__label_name}>
                <p>{currentUser?.email}</p>
              </div>
              <div className={styles.profile__label_edit}>
                <EditIcon
                  sx={{
                    fontSize: '25px',
                    width: '20px',
                    height: '20px',
                    fill: '#B5B6BA',
                    marginTop: '-10px',
                  }}
                />
              </div>
              <div>
                <Button
                  sx={{
                    textTransform: 'capitalize',
                    marginBottom: '20px',
                    color: '#62646a',
                    border: ' 1px solid #62646a',
                  }}
                  fullWidth
                  variant="outlined"
                >
                  Preview Fiverr Profile
                </Button>
              </div>
              <Divider />
            </div>
            <div className={styles.profile__label_bottom}>
              <div className={styles.profile__label_location}>
                <div className={styles.profile__label_locationLeft}>
                  <span>
                    <LocationOnIcon sx={{ marginRight: '8px' }} />
                  </span>
                  <span> From</span>
                </div>
                <div className={styles.profile__label_locationRight}>
                  <p>Vietnam</p>
                </div>
              </div>
              <div className={styles.profile__label_member}>
                <div className={styles.profile__label_memberLeft}>
                  <span>
                    <PersonIcon sx={{ marginRight: '8px' }} />
                  </span>
                  <span>Member Since</span>
                </div>
                <div className={styles.profile__label_memberRight}>
                  <p>Oct 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile__Avatar;
