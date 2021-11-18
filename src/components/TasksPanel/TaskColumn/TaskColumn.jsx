/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import selectorsCategoriesPanel from '../../CategoriesPanel/selectors';
import selectorsTasksPanel from '../selectors';
import Task from '../Task';

function TaskColumn(props) {
  const { tasks, currentCategoryId, newTask, filterText } = props;

  const filteringTasks = () => {
    let filteredTasks = JSON.parse(tasks);
    if (filterText) {
        filteredTasks = filteredTasks.filter(
          (item) =>
            item.taskTitle.includes(filterText) ||
            item.taskDescription.includes(filterText),
        );}
        return filteredTasks;
    }
    
    const renderItems = filteringTasks();
  

  return (
    <div className={styles.task}>
      <h3 className={styles.tasksColumnTitle}>TASKS</h3>
      <section className={styles.tasks}>
        <ul>
          {currentCategoryId
            ? renderItems
                .filter(
                  (item) => item.taskCategory.categoryId === currentCategoryId,
                )
                .map((item) => {
                  return (
                    <li key={item.taskId} className={styles.taskList}>
                      <Task
                        newTask={newTask}
                        taskId={item.taskId}
                        taskTitle={item.taskTitle}
                        taskCategory={item.taskCategory}
                        isDone={item.isDone}
                      />
                    </li>
                  );
                })
            : renderItems.map((item) => {
                return (
                  <li key={item.taskId} className={styles.taskList}>
                    <Task
                      newTask={newTask}
                      taskId={item.taskId}
                      taskTitle={item.taskTitle}
                      taskCategory={item.taskCategory}
                      isDone={item.isDone}
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
  newTask: selectorsTasksPanel.getNewTask(state),
  currentCategoryId: selectorsCategoriesPanel.getCurrentCategoryId(state),
  filterText: selectorsTasksPanel.getFilterText(state),
});

export default connect(mapStateToProps)(TaskColumn);
