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
     isLoading,
     loadCategories
    } = props;
  useEffect(() => {
    loadCategories();
  }, []);
  console.log(categories);

  const RenderCategoriesColumn = () => {
    return (
      <CategoryColumn
        categories={JSON.parse(categories)}
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
        <Loader visible={isLoading} />
      </div>
    </>
  );
}


const mapStateToProps = (state) => ({
  categories: selectors.getCategories(state),
  isLoading: selectors.getIsLoading(state),
});

export default connect(mapStateToProps, actions)(CategoriesPanel);
