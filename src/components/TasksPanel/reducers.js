import {
    SET_TASKS,
    SET_IS_LOADING,
} from './actionTypes';

const initState = {
    tasks: [],
    isLoading: false,
};

export const tasksPanelReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            const { tasks } = action.payload;
            return {
                ...state,
                tasks,
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