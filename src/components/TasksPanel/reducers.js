import {
  SET_TASKS,
  SET_IS_LOADING_TASKS,
  SET_NEW_TASK,
  SET_FILTER_TEXT,
  SET_FILTER_DONE,
} from './actionTypes';

const initState = {
  tasks: [],
  isLoadingTasks: false,
  newTask: {
    taskId: '',
    taskCategory: '',
    taskTitle: '',
    taskDescription: '',
    isDone: false,
  },
  filter: {
    text: "",
    isFilteringDoneTasks: false,
  },
};

export const tasksPanelReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      const {
        tasks
      } = action.payload;
      return {
        ...state,
        tasks,
      };
    }
    case SET_IS_LOADING_TASKS: {
      const {
        isLoadingTasks
      } = action.payload;
      return {
        ...state,
        isLoadingTasks,
      };
    }
    case SET_NEW_TASK: {
      const {
        newTaskId,
        newTaskCategory,
        newTaskTitle,
        newTaskDescription,
        isDoneNewTask
      } = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          taskId: newTaskId,
          taskCategory: newTaskCategory,
          taskTitle: newTaskTitle,
          taskDescription: newTaskDescription,
          isDone: isDoneNewTask
        },
      };
    }
    case SET_FILTER_TEXT: {
      const value = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          text: value
        },
      };
    }
    case SET_FILTER_DONE: {
      const value = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          isFilteringDoneTasks: value,
        }
      }
    }
    default:
      return state;
  }
}