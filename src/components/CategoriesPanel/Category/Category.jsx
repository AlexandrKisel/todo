/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.scss';
import categoriesPanelActions from '../actions';

function Category(props) {
  const { categoryId, categoryTitle } = props;
  return (
    <div className={styles.category}>
      <h3>{categoryTitle}</h3>
      <div>{categoryId}</div>
    </div>
  );
}

Category.propTypes = {
  categoryId: PropTypes.string,
  categoryTitle: PropTypes.array,
};

export default connect(null, categoriesPanelActions)(Category);
