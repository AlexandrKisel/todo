import {
  SET_TASKS,
  SET_IS_LOADING_TASKS,
  SET_NEW_TASK,
  SET_NEW_TASK_ID,
  SET_NEW_TASK_CATEGORY,
  SET_NEW_TASK_TITLE,
  SET_NEW_TASK_DESCRIPTION,
  SET_NEW_TASK_STATUS,
  SET_FILTER_TEXT,
  SET_FILTER_DONE,
  SET_TASK_EDIT_PANEL,
} from './actionTypes';

const initState = {
  tasks: [],
  isLoadingTasks: false,
  isTaskEdit: false,
  newTask: {
    taskId: '',
    taskCategory: {},
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
    case SET_NEW_TASK_ID: {
      const newTaskId = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          taskId: newTaskId,
        },
      };
    }
    case SET_NEW_TASK_CATEGORY: {
      const newTaskCategory = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          taskCategory: newTaskCategory,
        },
      };
    }
    case SET_NEW_TASK_TITLE: {
      const newTaskTitle = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          taskTitle: newTaskTitle,
        },
      };
    }
    case SET_NEW_TASK_DESCRIPTION: {
      const newTaskDescription = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          taskDescription: newTaskDescription,
        },
      };
    }
    case SET_NEW_TASK_STATUS: {
      const isDoneNewTask = action.payload;
      return {
        ...state,
        newTask: {
          ...state.newTask,
          isDone: isDoneNewTask,
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
    case SET_TASK_EDIT_PANEL: {
      const {
        isEdit,
        task
      } = action.payload;
      return {
        ...state,
        isTaskEdit: isEdit,
        newTask: {
          ...task
        }
      }
    }
    default:
      return state;
  }
}
