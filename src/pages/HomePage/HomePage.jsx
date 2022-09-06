import React from 'react';
import AppLayout from 'layout/AppLayout/AppLayout';
import CurrencyConverter from 'components/CurrencyConverter/CurrencyConverter';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <AppLayout>
      <div className={styles.page}>
        <CurrencyConverter />
      </div>
    </AppLayout>
  );
};

export default HomePage;