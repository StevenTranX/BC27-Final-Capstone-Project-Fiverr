import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardLayout from "../../../../../ReusableComponents/Profile_CardLayOut/CardLayout";
import BioTags from "../../../../../ReusableComponents/Profile__Bio/BioTags/BioTagInput";
import { getBookingJobs } from "../../../Slices/userProfileSlice";
import styles from "./ShareActivity.module.scss";
const ShareActivity = () => {
  return (
    <div className={styles.shareActivity}>
      <CardLayout>
        <BioTags
          leftHeader="Shared activity information"
          content="In order to provide the best possible work and service, some information about your activity on Fiverr may be shared with sellers."
          linkedContent="Manage settings"
        />
      </CardLayout>
    </div>
  );
};

export default ShareActivity;
