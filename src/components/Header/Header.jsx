import React from 'react';
import Container from 'components/Container/Container';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <img src="https://image.winudf.com/v2/image1/Y29tLmJpbmdodW8uY3VycmVuY3ljb252ZXJ0ZXJfaWNvbl8xNjI4ODI0OTI2XzAyNA/icon.png?w=&fakeurl=1" alt="" className={styles.header__logo} />
        </div>
      </Container>
    </div>
  );
};

export default Header;