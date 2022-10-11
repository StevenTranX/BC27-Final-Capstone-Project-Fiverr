import { Divider } from '@mui/material';
import React from 'react';
import BioTags from '../../../../../ReusableComponents/Profile__Bio /BioTags/BioTags';
import LinkedAccountsList from './LinkedAccountsList/LinkedAccountsList';
import styles from './Profile__Bio.module.scss';
const Profile__Bio = () => {
  return (
    <>
      <div className={styles.cardLayout}>
        <div className={styles.cardWrapper}>
          <form>
            <BioTags leftHeader="Description" rightHeader="Edit Description" />
          </form>
          <form>
            <BioTags
              leftHeader="Languages"
              rightHeader="Add New"
              content="English"
              subContent="- Basic"
            />
          </form>
          <form>
            <div className={styles.linkedAccount}>
              <header className={styles.linkedAccount__header}>
                <div className={styles.linkedAccount_col}>
                  <h3>Linked Accounts</h3>
                </div>
              </header>
              <div className={styles.linkedAccount_list}>
                <LinkedAccountsList />
              </div>
              <Divider />
            </div>
          </form>
          <form>
            <BioTags
              leftHeader="Skills"
              rightHeader="Add New"
              content="Add your Skills"
            />
          </form>
          <form>
            <BioTags
              leftHeader="Education"
              rightHeader="Add New"
              content="Add your Education"
            />
          </form>
          <form>
            <BioTags
              leftHeader="Certification"
              rightHeader="Add New"
              content="Add your Certification"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile__Bio;
