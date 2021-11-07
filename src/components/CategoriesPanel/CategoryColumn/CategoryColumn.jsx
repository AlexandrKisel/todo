/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './styles.scss';
import Category from '../Category';

function CategoryColumn(props) {
  const {
    categories,

  } = props;

  console.log(props);
  return (
    <div className={styles.category}>
      <h3 className={styles.categoriesColumnTitle}>CATEGORIES</h3>
      <section className={styles.categories}>
        <ul>
          {categories.map((item) => (
            <li key={item.categoryId}>
              <Link className={styles.categoryLink} to={`/${item.categoryName.toString().toLowerCase().replace(/\s+/g, '')}/`}>
                <Category
                categoryId={item.categoryId}
                categoryName={item.categoryName}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

CategoryColumn.propTypes = {
  categories: PropTypes.array,
};

export default CategoryColumn;
