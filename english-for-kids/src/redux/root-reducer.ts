import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories-reducer';
import menuReducer from './reducers/menu-reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
});

export default rootReducer;
