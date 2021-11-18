/* eslint-disable prefer-const */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import styles from './styles.scss';
import tasksPanelActions from '../actions';

function Task(props) {
  const {
    taskId,
    taskCategory,
    taskTitle,
    // taskDescription,
    isDone,
    changeTaskStatus,
    // loadTasks,
    // setNewTask,
    // newTask,
  } = props;


  return (
    <div className={styles.task}>
      <div className={styles.taskTitle}>
        <Checkbox
          checked={isDone}
          onChange={() => changeTaskStatus({ taskId })}
          inputProps={{ 'aria-label': 'controlled' }}
          color="default"
        />
        {/* <div>{taskId}</div> */}
        <h3>{taskTitle}</h3>
      </div>
      <div>{taskCategory.categoryTitle}</div>
    </div>
  );
}

Task.propTypes = {
  taskId: PropTypes.string,
  // taskCategory: PropTypes.object,
  taskTitle: PropTypes.string,
  // taskDescription: PropTypes.string,
  isDone: PropTypes.bool,
  taskCategory: PropTypes.object,
  changeTaskStatus: PropTypes.func,
};

export default connect(null , tasksPanelActions)(Task);
