import {
  SET_TASKS,
  SET_IS_LOADING_TASKS,
  SET_NEW_TASK,
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
  }
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

    default:
      return state;
  }
}
