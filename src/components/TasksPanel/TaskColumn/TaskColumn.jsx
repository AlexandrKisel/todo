/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './styles.scss';
import Task from '../Task';

function TaskColumn(props) {
  const {
    tasks,
  } = props;

  console.log(props);
  return (
    <div className={styles.task}>
      <h3 className={styles.tasksColumnTitle}>TASKS</h3>
      <section className={styles.tasks}>
        <ul>
          {tasks.map((item) => (
            <li key={item.taskId}>
              <Link className={styles.taskLink}>
                <Task
                taskId={item.taskId}
                taskTitle={item.taskTitle}
                taskCategory={item.taskCategory}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

TaskColumn.propTypes = {
  tasks: PropTypes.array,
};

export default TaskColumn;
