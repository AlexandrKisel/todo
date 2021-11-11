const getCategories = (store) => JSON.stringify(store.categoriesPanelReducer.categories);
const getIsLoadingCategories = (store) => store.categoriesPanelReducer.isLoadingCategories;
const getNewCategory = (store) => store.categoriesPanelReducer.newCategory;

export default {
    getCategories,
    getIsLoadingCategories,
    getNewCategory,
}
