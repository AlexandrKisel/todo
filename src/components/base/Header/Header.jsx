import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Logo from '../../common/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
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
