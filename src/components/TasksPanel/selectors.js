const getTasks = (store) => JSON.stringify(store.tasksPanelReducer.tasks);
const getIsLoading = (store) => store.tasksPanelReducer.isLoading;
const setTasks = (store) => store.tasksPanelReducer.newTask;

export default {
    getTasks,
    getIsLoading,
    setTasks,
}