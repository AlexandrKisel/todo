const getTasks = (store) => JSON.stringify(store.tasksPanelReducer.tasks);
const getIsLoadingTasks = (store) => store.tasksPanelReducer.isLoadingTasks;
const getNewTask = (store) => store.tasksPanelReducer.newTask;
const getFilterText = (store) => store.tasksPanelReducer.filter.text;

export default {
    getTasks,
    getIsLoadingTasks,
    getNewTask,
    getFilterText,
}
