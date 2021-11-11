/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.scss';
import tasksPanelActions from '../actions';

function Task(props) {
  const { taskId, taskCategory, taskTitle, taskDescription } = props;
  console.log(props);
  return (
    <div className={styles.task}>
      <div>{taskId}</div>
      <h3>{taskTitle}</h3>
      <div>{taskCategory.categoryTitle}</div>
    </div>
  );
}

Task.propTypes = {
  taskId: PropTypes.string,
  // taskCategory: PropTypes.object,
  taskTitle: PropTypes.string,
  taskDescription: PropTypes.string,
};

export default connect(null, tasksPanelActions)(Task);
