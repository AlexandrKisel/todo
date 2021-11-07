import {
    SET_CATEGORIES,
    SET_IS_LOADING,
} from './actionTypes';

const initState = {
    categories: [],
    isLoading: false,
};

export const categoriesPanelReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            const { categories } = action.payload;
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
        default:
            return state;
    }
};