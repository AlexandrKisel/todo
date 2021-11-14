import {
    SET_CATEGORIES,
    SET_IS_LOADING_CATEGORIES,
    SET_NEW_CATEGORY,
    SET_CURRENT_CATEGORY,
} from './actionTypes';

const initState = {
    categories: [],
    isLoadingCategories: false,
    newCategory: {
        categoryId: '',
        categoryTitle: '',
    },
    currentCategory: null,
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
        case SET_IS_LOADING_CATEGORIES: {
            const { isLoadingCategories } = action.payload;
            return {
              ...state,
              isLoadingCategories,
            };
          }
          case SET_NEW_CATEGORY: {
            const { newCategoryName, newCategoryId } = action.payload;
            return {
              ...state,
              newCategory: {
                ...state.newCategory,
                categoryTitle: newCategoryName,
                categoryId: newCategoryId,
              },
            };
          }
          case SET_CURRENT_CATEGORY: {
            const result = action.payload;
            return {
              ...state,
              currentCategory: result,
            };
          }
        default:
            return state;
    }
};