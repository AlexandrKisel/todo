/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import styles from './styles.scss';
import Logo from '../../common/Logo';
import selectorsCategoriesPanel from '../../CategoriesPanel/selectors';
import selectorsTasksPanel from '../../TasksPanel/selectors';
import actionsCategoriesPanel from '../../CategoriesPanel/actions';
import actionsTasksPanel from '../../TasksPanel/actions';
import Search from '../../common/Search';
import ProgressBar from '../../common/ProgressBar';

function Header(props) {
  const {
    categories,
    setNewCategory,
    newCategory,
    addCategory,
    tasks,
    setNewTask,
    newTask,
    addTask,
  } = props;
  console.log(props);

  const handleNewCategoryChange = (e) => {
    setNewCategory(
      e.target.value,
      (JSON.parse(categories).length + 1).toString(),
    );
  };

  const handleAddCategoryClick = () => {
    addCategory({
      categoryId: newCategory.categoryId,
      categoryTitle: newCategory.categoryTitle,
    });
  };

  const handleNewTaskChange = (e) => {
    setNewTask(
      (JSON.parse(tasks).length + 1).toString(),
      {},
      e.target.value,
      '',
      false,
    );
  };

  const handleAddTaskClick = () => {
    addTask({
      taskId: newTask.taskId,
      taskCategory: newTask.taskCategory,
      taskTitle: newTask.taskTitle,
      taskDescription: newTask.taskDescription,
      isDone: newTask.isDone,
    });
  };

  const renderCategoryInput = (value, onChange) => {
    return (
      <TextField
        value={value}
        id="new-category-title"
        type="text"
        onChange={onChange}
        size="small"
        variant="outlined"
        label="Enter category title"
      />
    );
  };

  const renderTaskInput = (value, onChange) => {
    return (
      <TextField
        value={value}
        id="new-task-title"
        type="text"
        onChange={onChange}
        size="small"
        variant="outlined"
        label="Enter task Title"
      />
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
          <h1>TO-DO LIST</h1>
        </div>
        <div className={styles.filterPanel}>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p>Show done</p>
          <Search />
        </div>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className={styles.addPanel}>
        <div>
          <Box component="form" noValidate>
            <FormControl
              variant="standard"
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {renderCategoryInput(
                newCategory.categoryTitle,
                handleNewCategoryChange,
              )}
              <Button variant="contained" onClick={handleAddCategoryClick}>
                Add
              </Button>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box component="form" noValidate>
            <FormControl
              variant="standard"
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {renderTaskInput(newTask.taskTitle, handleNewTaskChange)}
              <Button variant="contained" onClick={handleAddTaskClick}>
                Add
              </Button>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  categoryId: PropTypes.string,
  categoryTitle: PropTypes.array,
  taskId: PropTypes.string,
  taskTitle: PropTypes.string,
  taskDescription: PropTypes.string,
  isDone: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  categories: selectorsCategoriesPanel.getCategories(state),
  newCategory: selectorsCategoriesPanel.getNewCategory(state),
  isLoadingCategories: selectorsCategoriesPanel.getIsLoadingCategories(state),
  tasks: selectorsTasksPanel.getTasks(state),
  newTask: selectorsTasksPanel.getNewTask(state),
  isLoadingTasks: selectorsTasksPanel.getIsLoadingTasks(state),
});

export default connect(mapStateToProps, {
  ...actionsCategoriesPanel,
  ...actionsTasksPanel,
})(Header);
