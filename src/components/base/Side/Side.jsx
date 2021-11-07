import React from 'react';
import styles from './styles.scss'
import CategoriesPanel from '../../CategoriesPanel';

function Side() {
  return (
    <div className={styles.side}>
      <CategoriesPanel />
    </div>
  );
}

export default Side;
