import { TOGGLE_MENU } from '../action-constants';
import { IMenuAction, MenuState } from '../../app.api';

const InitialMenuState: MenuState = {
  isOpen: false,
};

const menuReducer = (state = InitialMenuState, action: IMenuAction): MenuState => {
  if (action.type === TOGGLE_MENU) {
    return { ...state, isOpen: !state.isOpen };
  }
  return state;
};

export default menuReducer;
