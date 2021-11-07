/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_CATEGORIES,
    SET_IS_LOADING,
} from './actionTypes';

const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: {
        categories,
    }
});

const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: {
        isLoading,
    }
});

const loadCategories = () => (dispatch) => {
    dispatch(setIsLoading(true));
    dataService.getCategories().then((data) => {
        dispatch(setIsLoading(false));
        dispatch(setCategories(data));
    })

};

export default {
    loadCategories,
}