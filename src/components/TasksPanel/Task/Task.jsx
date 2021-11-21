import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import styles from './styles.scss';
import tasksPanelActions from '../actions';
import EditButton from '../../common/EditButton';
import DeleteButton from '../../common/DeleteButton';

function Task(props) {
  const {
    taskId,
    taskCategory,
    taskTitle,
    taskDescription,
    isDone,
    changeTaskStatus,
    loadTasks,
    setTaskEditPanel,
    deleteTask,
  } = props;
  // console.log(taskDescription);

  const handleOpenTaskEditPanel = () => {
    setTaskEditPanel(true, {
      taskId,
      taskCategory,
      taskTitle,
      taskDescription,
      isDone,
    });
  };

  const handleDeleteTaskClick = () => {
    deleteTask({ taskId });
    loadTasks();
  };

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
        <div className={styles.taskDescription}>{taskDescription}</div>
      </div>

      <div className={styles.taskButtonsWrapper}>
        <div className={styles.taskCategory}>{taskCategory.categoryTitle}</div>
        <EditButton handleActivateEditModeClick={handleOpenTaskEditPanel} />
        <DeleteButton handleDeleteClick={handleDeleteTaskClick} />
      </div>
    </div>
  );
}

Task.propTypes = {
  taskId: PropTypes.string,
  // taskCategory: PropTypes.object,
  taskTitle: PropTypes.string,
  taskDescription: PropTypes.string,
  isDone: PropTypes.bool,
  taskCategory: PropTypes.shape({
    categoryId: PropTypes.string,
    categoryTitle: PropTypes.string,
  }),
  changeTaskStatus: PropTypes.func,
  deleteTask: PropTypes.func,
  loadTasks: PropTypes.func,
  setTaskEditPanel: PropTypes.func,
  newTask: PropTypes.shape({
    taskId: PropTypes.string,
    taskCategory: PropTypes.shape({
      categoryId: PropTypes.string,
      categoryTitle: PropTypes.string,
    }),
    taskTitle: PropTypes.string,
    taskDescription: PropTypes.string,
    isDone: PropTypes.bool,
  }),
};

export default connect(null, tasksPanelActions)(Task);
