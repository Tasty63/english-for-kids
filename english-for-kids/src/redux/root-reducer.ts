import { combineReducers } from 'redux';
import menuReducer from './reducers/menu-reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
});

export default rootReducer;
