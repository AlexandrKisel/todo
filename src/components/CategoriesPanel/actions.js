/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_CATEGORIES,
    SET_IS_LOADING_CATEGORIES,
    SET_NEW_CATEGORY,
    SET_CURRENT_CATEGORY,
} from './actionTypes';

const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: {
        categories
    }
});

const setIsLoadingCategories = (isLoadingCategories) => ({
    type: SET_IS_LOADING_CATEGORIES,
    payload: {
        isLoadingCategories,
    }
});

const setNewCategory = (newCategoryName, newCategoryId) => ({
    type: SET_NEW_CATEGORY,
    payload: {
        newCategoryName,
        newCategoryId,
    },
});

const setCurrentCategory = (currentCategory) => ({
    type: SET_CURRENT_CATEGORY,
    payload: {
        currentCategory
    },
});

const loadCategories = () => (dispatch) => {
    dispatch(setIsLoadingCategories(true));
    dataService.getCategories().then((data) => {
        dispatch(setIsLoadingCategories(false));
        dispatch(setCategories(data));
    })
};

const addCategory = (newCategory) => (dispatch) => {
    dataService.createCategory(newCategory).then(() => {
        dispatch(loadCategories());
    });
};

export default {
    loadCategories,
    setNewCategory,
    addCategory,
    setCurrentCategory,
}