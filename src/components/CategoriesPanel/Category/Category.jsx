import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
import styles from './styles.scss';
import categoriesPanelActions from '../actions';
import tasksPanelActions from '../../TasksPanel/actions';

function Category(props) {
  const { categoryId, categoryTitle, editCategory, loadTasks, deleteCategory } =
    props;
  // console.log(categoryId);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryName, setCategoryName] = useState(categoryTitle);
  const [editCategoryId] = useState(categoryId);

  const activateEditMode = () => {
    console.log(editMode);
    setEditMode(!editMode);
    console.log(editMode);
  };

  const deactivateEditMode = () => {
    setEditMode(!editMode);
    editCategory({
      categoryId: editCategoryId,
      categoryTitle: [editCategoryName],
    });
    loadTasks();
  };

  const onEnterDeactivateEditMode = (e) => {
    if (e.keyCode === 13) {
      deactivateEditMode();
    }
  };

  const onCategoryNameChange = (e) => {
    setCategoryName(e.currentTarget.value);
  };

  const handleDeleteCategoryClick = () => {
    deleteCategory({ categoryId, categoryTitle });
    loadTasks();
  };

  return (
    <div className={styles.category}>
      {!editMode ? (
        <h3>{categoryTitle}</h3>
      ) : (
        <input
          type="text"
          value={editCategoryName}
          onChange={onCategoryNameChange}
          onBlur={deactivateEditMode}
          onKeyDown={onEnterDeactivateEditMode}
        />
      )}
      <div>
        <IconButton aria-label="edit" onClick={activateEditMode}>
          <ModeEditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteCategoryClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

Category.propTypes = {
  categoryId: PropTypes.string,
  categoryTitle: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])),
  editCategory: PropTypes.func,
  loadTasks: PropTypes.func,
  deleteCategory: PropTypes.func,
};

export default connect(null, {
  ...categoriesPanelActions,
  ...tasksPanelActions,
})(Category);
