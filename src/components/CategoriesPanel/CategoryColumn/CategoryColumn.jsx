/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Category from '../Category';

function CategoryColumn(props) {
  const { categories, setCurrentCategoryId, currentCategoryId } = props;

  const handleCurrentCategoryIdChange = (curCategoryId) => {
    setCurrentCategoryId(curCategoryId);
    console.log(currentCategoryId);
  };

  console.log(props);
  return (
    <div className={styles.category}>
      <h3
        className={styles.categoriesColumnTitle}
        onClick={() => {handleCurrentCategoryIdChange(null)}}
      >
        CATEGORIES
      </h3>
      <section className={styles.categories}>
        <ul>
          {categories.map((item) => {
            return (
              <React.Fragment key={item.categoryId}>
                <div
                  className={
                    currentCategoryId === item.categoryId
                      ? styles.selectedCategoryList
                      : undefined
                  }
                >
                  <li
                    onClick={() => {
                      handleCurrentCategoryIdChange(item.categoryId);
                    }}
                    className={styles.categoryList}
                  >
                    <div>
                      <Category
                        categoryId={item.categoryId}
                        categoryTitle={item.categoryTitle}
                      />
                    </div>
                  </li>
                </div>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

CategoryColumn.propTypes = {
  categories: PropTypes.array,
  currentCategoryId: PropTypes.string,
};

export default CategoryColumn;
