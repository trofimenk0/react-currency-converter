import React from 'react';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <Container>
        {children}
      </Container>
    </div>
  );
};

export default AppLayout;