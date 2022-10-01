import React from 'react';
import Link from '@mui/material/Link';
const LinkFooter = () => {
  return (
    <>
      <Link
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          color: '#74767e',
          fontSize: '16px',
        }}
        color="inherit"
        underline="hover"
      />
    </>
  );
};

export default LinkFooter;
