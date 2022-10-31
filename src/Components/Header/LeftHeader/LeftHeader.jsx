import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../../Images/LandingPage/vector14.svg';
import styles from './LeftHeader.module.scss';
const LeftHeader = ({ color }) => {
  return (
    <div>
      <Logo
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        fill={color ? '#333' : '#fff'}
        cursor={'pointer'}
      />
    </div>
  );
};

export default LeftHeader;
