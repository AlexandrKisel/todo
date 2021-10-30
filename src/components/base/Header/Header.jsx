import React from 'react';
import styles from './styles.scss';
import logo from '../../../assets/images/logo.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>TO-DO LIST</h1>
      </div>
      <div>
        <input type="checkbox" />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
