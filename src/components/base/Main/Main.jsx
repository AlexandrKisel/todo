import React from 'react';
import styles from './styles.scss'
import TasksPanel from '../../TasksPanel';

function Main() {
  return (
    <div className={styles.main}>
      <TasksPanel />
    </div>
  );
}

export default Main;
