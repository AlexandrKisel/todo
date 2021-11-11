/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_TASKS,
    SET_IS_LOADING_TASKS,
    SET_NEW_TASK,
} from './actionTypes';

const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: {
        tasks,
    }
});

const setIsLoadingTasks = (isLoadingTasks) => ({
    type: SET_IS_LOADING_TASKS,
    payload: {
        isLoadingTasks,
    }
});

const setNewTask = ( newTaskId, newTaskCategory, newTaskTitle, newTaskDescription, IsDoneNewTask ) => ({
    type: SET_NEW_TASK,
    payload: {
      newTaskId,
      newTaskCategory,
      newTaskTitle,
      newTaskDescription,
      IsDoneNewTask,
    },
});

const loadTasks = () => (dispatch) => {
    dispatch(setIsLoadingTasks(true));
    dataService.getTasks().then((data) => {
        dispatch(setIsLoadingTasks(false));
        dispatch(setTasks(data));
    })

};

const addTask = (newTask) => (dispatch) => {
    dataService.createTask(newTask).then(() => {
      dispatch(loadTasks());
    });
  };

export default {
    loadTasks,
    setNewTask,
    addTask,
}
