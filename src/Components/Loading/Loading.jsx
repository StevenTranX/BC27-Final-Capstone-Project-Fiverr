import React from 'react';
import LoadingScreen from 'react-loading-screen';
import fiverrLogo from '../../Images/LandingPage/vector15.svg';
const Loading = ({ isLoading }) => {
  return (
    <div>
      <LoadingScreen
        loading={isLoading}
        bgColor='rgba(255,255,255,0.7)'
        spinnerColor='#1dbf73'
        textColor=''
        logoSrc={fiverrLogo}
        text=''
        children={''}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Loading;
