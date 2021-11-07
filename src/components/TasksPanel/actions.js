/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_TASKS,
    SET_IS_LOADING,
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

const loadTasks = () => (dispatch) => {
    dispatch(setIsLoading(true));
    dataService.getTasks().then((data) => {
        dispatch(setIsLoading(false));
        dispatch(setTasks(data));
    })

};

export default {
    loadTasks,
}