import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories-reducer';
import gameReducer from './reducers/game-reducer';
import menuReducer from './reducers/menu-reducer';
import modeReducer from './reducers/mode-reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  mode: modeReducer,
  game: gameReducer,
});

export default rootReducer;
