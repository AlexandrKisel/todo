const getCategories = (store) => JSON.stringify(store.categoriesPanelReducer.categories);
const getIsLoading = (store) => store.categoriesPanelReducer.isLoading;
const getNewCategory = (store) => store.categoriesPanelReducer.newCategory;

export default {
    getCategories,
    getIsLoading,
    getNewCategory,
}
