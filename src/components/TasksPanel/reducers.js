import {
    SET_TASKS,
    SET_IS_LOADING,
    SET_NEW_TASK,
} from './actionTypes';

const initState = {
    tasks: [],
    isLoading: false,
    newTask: {
        taskId: '',
        taskCategory: '',
        taskTitle: '',
        taskDescription: '',
        isDone: false,
    }
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
        case SET_NEW_TASK: {
            const { newTaskName } = action.payload;
            return {
              ...state,
              newTask: {
                ...state.newTask,
                title: newTaskName,
              },
            };
          }
        default:
            return state;
    }
};