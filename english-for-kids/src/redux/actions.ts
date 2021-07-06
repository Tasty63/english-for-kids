import { ThunkAction } from 'redux-thunk';
import { IMenuAction, ICategoriesAction, IModeAction, IStartGame, IRepeatWord } from '../app.api';
import { TOGGLE_MENU, INIT_CATEGORIES, TOGGLE_MODE, START_GAME, REPEAT_WORD } from './action-constants';
import { RootState } from './store';

export const toggleMenu =
  (target: EventTarget): ThunkAction<void, RootState, unknown, IMenuAction> =>
  async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: TOGGLE_MENU, target });
  };

export const initCategories = (): ThunkAction<void, RootState, unknown, ICategoriesAction> => async dispatch => {
  dispatch({ type: INIT_CATEGORIES });
};

export const toggleMode = (): ThunkAction<void, RootState, unknown, IModeAction> => async dispatch => {
  dispatch({ type: TOGGLE_MODE });
};

export const startGame = (): IStartGame => ({ type: START_GAME });
export const repeatWord = (): IRepeatWord => ({ type: REPEAT_WORD });
