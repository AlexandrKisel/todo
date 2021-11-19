import dataService from '../../services/dataService';
import {
    SET_TASKS,
    SET_IS_LOADING_TASKS,
    SET_NEW_TASK,
    SET_FILTER_TEXT,
    SET_FILTER_DONE,
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

const setNewTask = (newTaskId, newTaskCategory, newTaskTitle, newTaskDescription, isDoneNewTask) => ({
    type: SET_NEW_TASK,
    payload: {
        newTaskId,
        newTaskCategory,
        newTaskTitle,
        newTaskDescription,
        isDoneNewTask,
    },
});

const setFilterText = (value) => ({
    type: SET_FILTER_TEXT,
    payload: value,
})

const setFilterDone = (value) => ({
    type: SET_FILTER_DONE,
    payload: value,
})

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

const changeTaskStatus = (currentTask) => (dispatch) => {
    dataService.editTaskStatus(currentTask).then(() => {
        dispatch(loadTasks());
    });
}

export default {
    loadTasks,
    setNewTask,
    addTask,
    changeTaskStatus,
    setFilterText,
    setFilterDone,
}