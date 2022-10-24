import React from 'react';
import LoadingScreen from 'react-loading-screen';
const Loading = ({ children, isLoading }) => {
  return (
    <div>
      <LoadingScreen
        loading={isLoading}
        bgColor='rgba(255,255,255,0.8)'
        spinnerColor='#1dbf73'
        textColor=''
        logoSrc=''
        text=''
      >
        {children}
      </LoadingScreen>
    </div>
  );
};

export default Loading;
