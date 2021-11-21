/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '../../common/Button';
import styles from './styles.scss';

function TaskEditPanel(props) {
  const {
    newTask,
    categories,
    setNewTaskTitle,
    setNewTaskCategory,
    setNewTaskDescription,
    setNewTaskStatus,
    editTask,
    setTaskEditPanel,
  } = props;
  // console.log(newTask);

  const handleEditTaskClick = () => {
    editTask({
      taskId: newTask.taskId,
      taskCategory: newTask.taskCategory,
      taskTitle: newTask.taskTitle,
      taskDescription: newTask.taskDescription,
      isDone: newTask.isDone,
    });
    setTaskEditPanel(false, {
      taskId: '',
      taskCategory: {},
      taskTitle: '',
      taskDescription: '',
      isDone: false,
    });
  };

  const handleCloseTaskEditPanelClick = () => {
    setTaskEditPanel(false, {
      taskId: '',
      taskCategory: {},
      taskTitle: '',
      taskDescription: '',
      isDone: false,
    });
  }

  const handleNewTaskTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleNewTaskCategoryChange = (e) => {
    setNewTaskCategory(
      categories[
        categories.findIndex((item) => item.categoryTitle === e.target.value)
      ],
    );
  };

  const handleNewTaskDescriptionChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleNewTaskStatusChange = () => {
    setNewTaskStatus(!newTask.isDone);
  };

  return (
    <div className={styles.taskEditPanel}>
      <h3 className={styles.tasksColumnTitle}>TASK EDIT</h3>
      <div className={styles.taskEditInputs}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: '15px 0', width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={newTask.taskTitle}
            onChange={handleNewTaskTitleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newTask.taskCategory.categoryTitle}
              label="Category"
              onChange={handleNewTaskCategoryChange}
            >
              {categories.map((item) => (
                <MenuItem value={item.categoryTitle} key={item.categoryId}>
                  {item.categoryTitle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rows={6}
            value={newTask.taskDescription}
            onChange={handleNewTaskDescriptionChange}
            variant="standard"
          />
        </Box>
      </div>
      <div className={styles.taskCheckbox}>
        <Checkbox
          checked={newTask.isDone}
          onChange={handleNewTaskStatusChange}
          color="default"
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <p>Done</p>
      </div>
      <Stack spacing={2} direction="row">
        <Button handleClick={handleEditTaskClick} text="Save changes" />
        <Button handleClick={handleCloseTaskEditPanelClick} text="Cancel" />
      </Stack>
    </div>
  );
}

TaskEditPanel.propTypes = {
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
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.string),
  ),
};

export default TaskEditPanel;
