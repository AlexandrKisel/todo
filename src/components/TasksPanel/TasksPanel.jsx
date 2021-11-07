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
  const { tasks, isLoading, loadTasks } = props;
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
        <Loader visible={isLoading} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  tasks: selectors.getTasks(state),
  isLoading: selectors.getIsLoading(state),
});

export default connect(mapStateToProps, actions)(TasksPanel);
