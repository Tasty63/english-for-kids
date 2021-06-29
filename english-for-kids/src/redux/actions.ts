import { IMenuAction } from './../app.api';
import { ThunkAction } from 'redux-thunk';
import { TOGGLE_MENU } from './action-constants';
import { RootState } from './store';

export const toggleMenu = (): ThunkAction<void, RootState, unknown, IMenuAction> => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_MENU });
  };
};
