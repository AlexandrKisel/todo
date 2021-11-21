import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectorsTasksPanel from './selectors';
import selectorsCategoriesPanel from '../CategoriesPanel/selectors';
import styles from './styles.scss';
import actions from './actions';
import TaskColumn from './TaskColumn';
import Loader from '../common/Loader';
import TaskEditPanel from './TaskEditPanel';

function TasksPanel(props) {
  const {
    loadTasks,
    isLoadingTasks,
    isTaskEdit,
    categories,
    newTask,
    setNewTaskTitle,
    setNewTaskCategory,
    setNewTaskDescription,
    setNewTaskStatus,
    editTask,
    setTaskEditPanel,
  } = props;
  useEffect(() => {
    loadTasks();
  }, []);
  // console.log(isTaskEdit);
  const RenderTasksColumn = () => {
    return <TaskColumn />;
  };

  return (
    <>
      <div className={styles.tasksPanel}>
        <section>
          <div className={styles.tasksColumn}>
            {!isTaskEdit ? (
              <RenderTasksColumn />
            ) : (
              <TaskEditPanel
                newTask={newTask}
                categories={JSON.parse(categories)}
                setNewTaskTitle={setNewTaskTitle}
                setNewTaskCategory={setNewTaskCategory}
                setNewTaskDescription={setNewTaskDescription}
                setNewTaskStatus={setNewTaskStatus}
                editTask={editTask}
                setTaskEditPanel={setTaskEditPanel}
              />
            )}
          </div>
        </section>
        <Loader visible={isLoadingTasks} />
      </div>
    </>
  );
}

TasksPanel.propTypes = {
  loadTasks: PropTypes.func,
  isTaskEdit: PropTypes.bool,
  isLoadingTasks: PropTypes.bool,
  newTask: PropTypes.shape({
    taskId: PropTypes.string,
    taskCategory: PropTypes.shape({
      categoryId: PropTypes.string,
      categoryTitle: PropTypes.string,
    }),
    taskTitle: PropTypes.string,
    taskDescription: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  categories: PropTypes.string,
  setNewTaskTitle: PropTypes.func,
  setNewTaskCategory: PropTypes.func,
  setNewTaskDescription: PropTypes.func,
  setNewTaskStatus: PropTypes.func,
  editTask: PropTypes.func,
  setTaskEditPanel: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoadingTasks: selectorsTasksPanel.getIsLoadingTasks(state),
  isTaskEdit: selectorsTasksPanel.getTaskEdit(state),
  newTask: selectorsTasksPanel.getNewTask(state),
  categories: selectorsCategoriesPanel.getCategories(state),
});

export default connect(mapStateToProps, { ...actions })(TasksPanel);
