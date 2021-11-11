/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import selectors from './selectors';
import styles from './styles.scss';
import actions from './actions';
import TaskColumn from './TaskColumn';
import Loader from '../common/Loader/Loader';

function TasksPanel(props) {
  const { tasks, isLoadingTasks, loadTasks } = props;
  useEffect(() => {
    loadTasks();
  }, []);
  console.log(props);

  const RenderTasksColumn = () => {
    return (
      <TaskColumn tasks={JSON.parse(tasks)} />
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
  tasks: selectors.getTasks(state),
  isLoadingTasks: selectors.getIsLoadingTasks(state),
});

export default connect(mapStateToProps, actions)(TasksPanel);
