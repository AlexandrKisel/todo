const getTasks = (store) => JSON.stringify(store.tasksPanelReducer.tasks);
const getIsLoadingTasks = (store) => store.tasksPanelReducer.isLoadingTasks;
const getNewTask = (store) => store.tasksPanelReducer.newTask;

export default {
    getTasks,
    getIsLoadingTasks,
    getNewTask,
}
