import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.scss';
import categoriesPanelActions from '../actions';
import tasksPanelActions from '../../TasksPanel/actions';
import EditButton from '../../common/EditButton';
import DeleteButton from '../../common/DeleteButton';

function Category(props) {
  const { categoryId, categoryTitle, editCategory, loadTasks, deleteCategory } =
    props;
  // console.log(categoryId);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryName, setCategoryName] = useState(categoryTitle);
  const [editCategoryId] = useState(categoryId);

  const activateEditMode = () => {
    setEditMode(!editMode);
  };

  const deactivateEditMode = () => {
    setEditMode(!editMode);
    editCategory({
      categoryId: editCategoryId,
      categoryTitle: editCategoryName,
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
    deleteCategory({ categoryId });
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
      <div className={styles.buttonsWrapper}>
        <EditButton handleActivateEditModeClick={activateEditMode}/>
        <DeleteButton handleDeleteClick={handleDeleteCategoryClick}/>
      </div>
    </div>
  );
}

Category.propTypes = {
  categoryId: PropTypes.string,
  categoryTitle: PropTypes.string,
  editCategory: PropTypes.func,
  loadTasks: PropTypes.func,
  deleteCategory: PropTypes.func,
};

export default connect(null, {
  ...categoriesPanelActions,
  ...tasksPanelActions,
})(Category);
