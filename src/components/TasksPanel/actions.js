/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_TASKS,
    SET_IS_LOADING,
    SET_NEW_TASK,
} from './actionTypes';

const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: {
        tasks,
    }
});

const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: {
        isLoading,
    }
});

const setNewTask = (newTaskName, newTaskId, newTaskCategory, newTaskDescription, newTaskStatus ) => ({
    type: SET_NEW_TASK,
    payload: {
      newTaskName,
      newTaskId,
      newTaskCategory,
      newTaskDescription,
      newTaskStatus
    },
});

const loadTasks = () => (dispatch) => {
    dispatch(setIsLoading(true));
    dataService.getTasks().then((data) => {
        dispatch(setIsLoading(false));
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