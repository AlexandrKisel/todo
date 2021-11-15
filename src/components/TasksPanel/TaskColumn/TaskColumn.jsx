/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Task from '../Task';

function TaskColumn(props) {
  const {
    tasks,
    currentCategoryId,
   } = props;

  console.log(currentCategoryId);
  return (
    <div className={styles.task}>
      <h3 className={styles.tasksColumnTitle}>TASKS</h3>
      <section className={styles.tasks}>
        <ul>
          { currentCategoryId
          ? tasks.filter((item) => item.taskCategory.categoryId === currentCategoryId)
          .map((item) => {
            return (
              <li key={item.taskId} className={styles.taskList}>
                <Task
                  taskId={item.taskId}
                  taskTitle={item.taskTitle}
                  taskCategory={item.taskCategory}
                />
              </li>
            );
          })
          :  tasks.map((item) => {
            return (
              <li key={item.taskId} className={styles.taskList}>
                <Task
                  taskId={item.taskId}
                  taskTitle={item.taskTitle}
                  taskCategory={item.taskCategory}
                />
              </li>
            );
          })
          }
        </ul>
      </section>
    </div>
  );
}

TaskColumn.propTypes = {
  tasks: PropTypes.array,
};


export default TaskColumn;
