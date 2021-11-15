/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import selectorsTasksPanel from './selectors';
import selectorsCategoriesPanel from '../CategoriesPanel/selectors';
import styles from './styles.scss';
import actions from './actions';
import TaskColumn from './TaskColumn';
import Loader from '../common/Loader/Loader';

function TasksPanel(props) {
  const {
    tasks,
    isLoadingTasks,
    loadTasks,
    currentCategoryId,
  } = props;
  useEffect(() => {
    loadTasks();
  }, []);
  console.log(currentCategoryId);

  const RenderTasksColumn = () => {
    return (
      <TaskColumn
      tasks={JSON.parse(tasks)}
      currentCategoryId={currentCategoryId}
      />
    );
  };

  return (
    <>
      <div className={styles.tasksPanel}>
        <section>
          <div className={styles.tasksColumn}>
            <RenderTasksColumn />
          </div>
        </section>
        <Loader visible={isLoadingTasks} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  tasks: selectorsTasksPanel.getTasks(state),
  isLoadingTasks: selectorsTasksPanel.getIsLoadingTasks(state),
  currentCategoryId: selectorsCategoriesPanel.getCurrentCategoryId(state),
});

export default connect(mapStateToProps, { ...actions})(TasksPanel);
