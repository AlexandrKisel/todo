/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './styles.scss';
import Logo from '../../common/Logo';
import actions from '../../CategoriesPanel/actions.js';
import selectors from '../../CategoriesPanel/selectors';

function Header(props) {
  const {
    categories,
    setNewCategory,
    newCategory,
    addCategory,
  } = props;
  console.log(props);

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value, (JSON.parse(categories).length + 1).toString());
  };

  const handleAddCategoryClick = () => {
    addCategory({
      categoryId: newCategory.categoryId,
      categoryTitle: newCategory.categoryTitle,
    });
  };

  const renderInput = (value, onChange) => {
    return (
      <TextField
        value={value}
        id="new-category-title"

        type="text"
        onChange={onChange}
        size="small"
        variant="outlined"
        label="Enter category title"
      />
    );
  };


  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
          <h1>TO-DO LIST</h1>
        </div>
        <div>
          <input type="checkbox" />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div>
        Progress Bar
      </div>
      <div className={styles.categoryButton}>
        <div>
          {renderInput(newCategory.categoryTitle, handleNewCategoryChange)}
          <Button  variant="contained" onClick={handleAddCategoryClick}>
            Add
          </Button>
        </div>
        <div>
          <Button  variant="contained" onClick="click">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  categoryId: PropTypes.string,
  categoryTitle: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  categories: selectors.getCategories(state),
  isLoading: selectors.getIsLoading(state),
  newCategory: selectors.getNewCategory(state),
});

export default connect(mapStateToProps, actions)(Header);
