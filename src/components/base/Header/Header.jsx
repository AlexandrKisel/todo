import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
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
    currentCategoryId,
    tasks,
    setNewTask,
    newTask,
    addTask,
    isFilteringDoneTasks,
    setFilterDone,
  } = props;

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
    setNewCategory('', '');
  };

  const handleNewTaskChange = (e) => {
    setNewTask(
      (
        Number(JSON.parse(tasks)[JSON.parse(tasks).length - 1]?.taskId) + 1 || 1
      ).toString(),
      JSON.parse(categories)[
        JSON.parse(categories).findIndex(
          (item) => item.categoryId === currentCategoryId,
        )
      ],
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
    setNewTask('', {}, '', '', false);
  };

  const onChangeDoneHandler = () => {
    setFilterDone(!isFilteringDoneTasks);
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
        label="Enter task title"
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
            checked={isFilteringDoneTasks}
            onChange={onChangeDoneHandler}
            color="default"
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p>Show done</p>
          <Search />
        </div>
      </div>
      <div>
        <ProgressBar tasks={JSON.parse(tasks)} />
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
              <Button
                variant="contained"
                onClick={handleAddCategoryClick}
                disabled={!newCategory.categoryTitle}
              >
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
              <Button
                variant="contained"
                onClick={handleAddTaskClick}
                disabled={!newTask.taskTitle || !currentCategoryId}
              >
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
  categories: PropTypes.string,
  setNewCategory: PropTypes.func,
  newCategory: PropTypes.shape({
    categoryId: PropTypes.string,
    categoryTitle: PropTypes.string,
  }),
  addCategory: PropTypes.func,
  currentCategoryId: PropTypes.string,
  tasks: PropTypes.string,
  setNewTask: PropTypes.func,
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
  addTask: PropTypes.func,
  setFilterDone: PropTypes.func,
  isFilteringDoneTasks: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  categories: selectorsCategoriesPanel.getCategories(state),
  newCategory: selectorsCategoriesPanel.getNewCategory(state),
  isLoadingCategories: selectorsCategoriesPanel.getIsLoadingCategories(state),
  currentCategoryId: selectorsCategoriesPanel.getCurrentCategoryId(state),
  tasks: selectorsTasksPanel.getTasks(state),
  newTask: selectorsTasksPanel.getNewTask(state),
  isLoadingTasks: selectorsTasksPanel.getIsLoadingTasks(state),
  isFilteringDoneTasks: selectorsTasksPanel.getFilterDoneTasks(state),
});

export default connect(mapStateToProps, {
  ...actionsCategoriesPanel,
  ...actionsTasksPanel,
})(Header);
