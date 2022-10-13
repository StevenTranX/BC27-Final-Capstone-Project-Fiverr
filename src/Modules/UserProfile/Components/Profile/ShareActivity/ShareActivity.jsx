import React from 'react';
import CardLayout from '../../../../../ReusableComponents/Profile_CardLayOut/CardLayout';
import BioTags from '../../../../../ReusableComponents/Profile__Bio/BioTags/BioTags';
const ShareActivity = () => {
  return (
    <div>
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
