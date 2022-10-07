import React from 'react';
import { Container } from '@mui/material';
import styles from './Services.module.scss';
import ServicesSlider from './ServicesSlider/ServicesSlider';

const Services = () => {
  return (
    <Container maxWidth="lg">
      <div className={styles.servicesHeader}>
        <header>
          <h2>Popular professional services</h2>
        </header>
      </div>
      <div className={styles.servicesSlider}>
        <ServicesSlider />
      </div>
    </Container>
  );
};

export default Services;
