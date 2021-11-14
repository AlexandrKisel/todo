/* eslint-disable prefer-destructuring */
const getCategories = (store) => JSON.stringify(store.categoriesPanelReducer.categories);
const getIsLoadingCategories = (store) => store.categoriesPanelReducer.isLoadingCategories;
const getNewCategory = (store) => store.categoriesPanelReducer.newCategory;
const getCurrentCategoryId = (store) => store.categoriesPanelReducer.currentCategory;
const getCurrentCategory = (store) => {
    const categories = store.categoriesPanelReducer.categories;
    const currentCategoryId = store.categoriesPanelReducer.currentCategory;
    return categories.find((item) => item.id === currentCategoryId);

}

export default {
    getCategories,
    getIsLoadingCategories,
    getNewCategory,
    getCurrentCategory,
    getCurrentCategoryId,
}
