/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import selectors from './selectors';
import styles from './styles.scss';
import actions from './actions';
import CategoryColumn from './CategoryColumn';
import Loader from '../common/Loader/Loader';

function CategoriesPanel(props) {
  const {
    categories,
    isLoadingCategories,
    loadCategories,
    setCurrentCategoryId,
    currentCategoryId,
  } = props;
  console.log(props);
  useEffect(() => {
    loadCategories();
  }, []);

  const RenderCategoriesColumn = () => {
    return (
      <CategoryColumn
        categories={JSON.parse(categories)}
        setCurrentCategoryId={setCurrentCategoryId}
        currentCategoryId={currentCategoryId}
      />
    );
  };

  return (
    <>
      <div className={styles.categoriesPanel}>
        <section>
          <div className={styles.categoriesColumn}>
            <RenderCategoriesColumn />
          </div>
        </section>
        <Loader visible={isLoadingCategories} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: selectors.getCategories(state),
  isLoadingCategories: selectors.getIsLoadingCategories(state),
  currentCategoryId: selectors.getCurrentCategoryId(state),
});

export default connect(mapStateToProps, { ...actions })(CategoriesPanel);
