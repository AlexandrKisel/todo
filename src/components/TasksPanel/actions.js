import dataService from '../../services/dataService';
import {
    SET_TASKS,
    SET_IS_LOADING_TASKS,
    SET_NEW_TASK,
    SET_NEW_TASK_ID,
    SET_NEW_TASK_CATEGORY,
    SET_NEW_TASK_TITLE,
    SET_NEW_TASK_DESCRIPTION,
    SET_NEW_TASK_STATUS,
    SET_FILTER_TEXT,
    SET_FILTER_DONE,
    SET_TASK_EDIT_PANEL,
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

const setNewTaskId = (newTaskId) => ({
    type: SET_NEW_TASK_ID,
    payload: newTaskId,
})

const setNewTaskCategory = (newTaskCategory) => ({
    type: SET_NEW_TASK_CATEGORY,
    payload: newTaskCategory,
})

const setNewTaskTitle = (newTaskTitle) => ({
    type: SET_NEW_TASK_TITLE,
    payload: newTaskTitle,
})

const setNewTaskDescription = (newTaskDescription) => ({
    type: SET_NEW_TASK_DESCRIPTION,
    payload: newTaskDescription,
})

const setNewTaskStatus = (isDoneNewTask) => ({
    type: SET_NEW_TASK_STATUS,
    payload: isDoneNewTask,
})

const setFilterText = (value) => ({
    type: SET_FILTER_TEXT,
    payload: value,
})

const setFilterDone = (value) => ({
    type: SET_FILTER_DONE,
    payload: value,
})

const setTaskEditPanel = (isEdit, task) => ({
    type: SET_TASK_EDIT_PANEL,
    payload: {
        isEdit,
        task,
    }
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

const editTask = (currentTask) => (dispatch) => {
    dataService.editTask(currentTask).then(() => {
        dispatch(loadTasks());
    });
}

const deleteTask = (currentTask) => (dispatch) => {
    dataService.deleteTask(currentTask).then(() => {
        dispatch(loadTasks());
    });
}

export default {
    loadTasks,
    setNewTask,
    setNewTaskId,
    setNewTaskCategory,
    setNewTaskTitle,
    setNewTaskDescription,
    setNewTaskStatus,
    addTask,
    changeTaskStatus,
    editTask,
    setFilterText,
    setFilterDone,
    setTaskEditPanel,
    deleteTask,
}