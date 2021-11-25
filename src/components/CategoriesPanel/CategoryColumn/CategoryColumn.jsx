/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Category from '../Category';

function CategoryColumn(props) {
  const { categories, setCurrentCategoryId, currentCategoryId } = props;

  const handleCurrentCategoryIdChange = (curCategoryId) => {
    setCurrentCategoryId(curCategoryId);
  };

  return (
    <div>
      <h3
        className={currentCategoryId ? styles.categoriesColumnTitle : styles.categoriesColumnTitleActive}
        onClick={() => {
          handleCurrentCategoryIdChange(null);
        }}
      >
        CATEGORIES
      </h3>
      <section className={styles.categories}>
        <ul>
          {categories.map((item, index) => {
            return (
              <React.Fragment key={index}>
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
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.string),
  ),
  currentCategoryId: PropTypes.string,
  setCurrentCategoryId: PropTypes.func,
};

export default CategoryColumn;
