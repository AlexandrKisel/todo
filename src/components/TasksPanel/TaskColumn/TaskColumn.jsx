/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import selectorsCategoriesPanel from '../../CategoriesPanel/selectors';
import selectorsTasksPanel from '../selectors';
import Task from '../Task';

function TaskColumn(props) {
  const { tasks, currentCategoryId } = props;
 
  return (
    <div className={styles.task}>
      <h3 className={styles.tasksColumnTitle}>TASKS</h3>
      <section className={styles.tasks}>
        <ul>
          {currentCategoryId
            ? JSON.parse(tasks)
                .filter(
                  (item) => item.taskCategory.categoryId === currentCategoryId,
                )
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
            : JSON.parse(tasks).map((item) => {
                return (
                  <li key={item.taskId} className={styles.taskList}>
                    <Task
                      taskId={item.taskId}
                      taskTitle={item.taskTitle}
                      taskCategory={item.taskCategory}
                    />
                  </li>
                );
              })}
        </ul>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: selectorsTasksPanel.getTasks(state),
  currentCategoryId: selectorsCategoriesPanel.getCurrentCategoryId(state),
});

export default connect(mapStateToProps, )(TaskColumn);

