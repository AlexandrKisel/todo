const getCategories = (store) => JSON.stringify(store.categoriesPanelReducer.categories);
const getIsLoading = (store) => store.categoriesPanelReducer.isLoading;

export default {
    getCategories,
    getIsLoading,
}