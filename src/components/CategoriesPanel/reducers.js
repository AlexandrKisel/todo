import {
    SET_CATEGORIES,
    SET_IS_LOADING,
    SET_NEW_CATEGORY,
} from './actionTypes';

const initState = {
    categories: [],
    isLoading: false,
    newCategory: {
        categoryId: '',
        categoryTitle: '',
    }
};

export const categoriesPanelReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            const { categories} = action.payload;
            return {
                ...state,
                categories,
            };
        }
        case SET_IS_LOADING: {
            const { isLoading } = action.payload;
            return {
              ...state,
              isLoading,
            };
          }
          case SET_NEW_CATEGORY: {
            const { newCategoryName, newCategoryId } = action.payload;
            return {
              ...state,
              newCategory: {
                categoryTitle: newCategoryName,
                categoryId: newCategoryId,
              },
            };
          }
        default:
            return state;
    }
};