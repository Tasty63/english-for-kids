import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories-reducer';
import gameReducer from './reducers/game-reducer';
import menuReducer from './reducers/menu-reducer';
import modeReducer from './reducers/mode-reducer';
import statisticsReducer from './reducers/statistics-reducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  mode: modeReducer,
  game: gameReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
