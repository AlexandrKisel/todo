/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import selectorsTasksPanel from './selectors';
import styles from './styles.scss';
import actions from './actions';
import TaskColumn from './TaskColumn';
import Loader from '../common/Loader/Loader';

function TasksPanel(props) {
  const {
    isLoadingTasks,
    loadTasks,
  } = props;
  useEffect(() => {
    loadTasks();
  }, []);

  const RenderTasksColumn = () => {
    return <TaskColumn />;
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
  isLoadingTasks: selectorsTasksPanel.getIsLoadingTasks(state),
});

export default connect(mapStateToProps, { ...actions })(TasksPanel);
