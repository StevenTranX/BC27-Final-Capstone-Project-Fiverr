import { Container } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Slices/userProfileSlice";
import ProfileAvatar from "./Avatar/ProfileAvatar";
import ProfileBio from "./Bio/ProfileBio";
import EarnBadges from "./EarnBadges/EarnBadges";
import styles from "./Profile.module.scss";
import ShareActivity from "./ShareActivity/ShareActivity";
const Profile = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={styles.MainContent}>
      <Container>
        <div className={styles.MainContentWrapper}>
          <ProfileAvatar />
          <EarnBadges />
          <ProfileBio />
          <ShareActivity />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
