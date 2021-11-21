const getCategories = (store) => JSON.stringify(store.categoriesPanelReducer.categories);
const getIsLoadingCategories = (store) => store.categoriesPanelReducer.isLoadingCategories;
const getNewCategory = (store) => store.categoriesPanelReducer.newCategory;
const getCurrentCategoryId = (store) => store.categoriesPanelReducer.currentCategoryId;



export default {
    getCategories,
    getIsLoadingCategories,
    getNewCategory,
    getCurrentCategoryId,
}
