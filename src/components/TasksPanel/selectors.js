const getTasks = (store) => JSON.stringify(store.tasksPanelReducer.tasks);
const getIsLoading = (store) => store.tasksPanelReducer.isLoading;

export default {
    getTasks,
    getIsLoading,
}