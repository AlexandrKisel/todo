import { combineReducers } from 'redux';
import { categoriesPanelReducer } from '../components/CategoriesPanel';
import { tasksPanelReducer } from '../components/TasksPanel';

export default combineReducers({ categoriesPanelReducer, tasksPanelReducer });
