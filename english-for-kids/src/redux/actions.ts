import { IMenuAction, ICategoriesAction, IModeAction } from './../app.api';
import { ThunkAction } from 'redux-thunk';
import { TOGGLE_MENU, INIT_CATEGORIES, TOGGLE_MODE } from './action-constants';
import { RootState } from './store';

export const toggleMenu = (): ThunkAction<void, RootState, unknown, IMenuAction> => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_MENU });
  };
};

export const initCategories = (): ThunkAction<void, RootState, unknown, ICategoriesAction> => {
  return async (dispatch) => {
    dispatch({ type: INIT_CATEGORIES });
  };
};

export const toggleMode = (): ThunkAction<void, RootState, unknown, IModeAction> => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_MODE });
  };
};
