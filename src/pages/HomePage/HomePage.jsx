import React from 'react';
import AppLayout from 'layout/AppLayout/AppLayout';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <AppLayout>
      <div className={styles.page}>
        Hello! My name is Denis!
      </div>
    </AppLayout>
  );
};

export default HomePage;