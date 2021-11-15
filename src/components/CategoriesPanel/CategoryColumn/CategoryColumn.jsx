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
  const { categories, setCurrentCategory, currentCategory } = props;

  const handleCurrentCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    console.log(currentCategory);
  };

  console.log(props);
  return (
    <div className={styles.category}>
      <h3
        className={styles.categoriesColumnTitle}
        onClick={() => {handleCurrentCategoryChange(null)}}
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
                    currentCategory === item.categoryId
                      ? styles.selectedCategoryList
                      : undefined
                  }
                >
                  <li
                    onClick={() => {
                      handleCurrentCategoryChange(item.categoryId);
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
  currentCategory: PropTypes.string,
};

export default CategoryColumn;
