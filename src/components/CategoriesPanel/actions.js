/* eslint-disable no-debugger */
/* eslint-disable no-console */
import dataService from '../../services/dataService';
import {
    SET_CATEGORIES,
    SET_IS_LOADING,
    SET_NEW_CATEGORY,
} from './actionTypes';

const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: {
        categories
    }
});

const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: {
        isLoading,
    }
});

const setNewCategory = (newCategoryName, newCategoryId) => ({
    type: SET_NEW_CATEGORY,
    payload: {
      newCategoryName,
      newCategoryId,
    },
  });

const loadCategories = () => (dispatch) => {
    dispatch(setIsLoading(true));
    dataService.getCategories().then((data) => {
        dispatch(setIsLoading(false));
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
}