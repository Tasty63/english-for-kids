import { isClickOnLink, isClickOnBurger, isClickOutsideMenu } from '../../utils/helpers';
import { TOGGLE_MENU } from '../action-constants';
import { IMenuAction, MenuState } from '../../app.api';

const InitialMenuState: MenuState = {
  isOpen: false,
};

const menuReducer = (state = InitialMenuState, action: IMenuAction): MenuState => {
  if (action.type === TOGGLE_MENU) {
    if (
      isClickOnBurger(action.target)
      || isClickOnLink(action.target)
      || (state.isOpen && isClickOutsideMenu(action.target))
    ) {
      return { ...state, isOpen: !state.isOpen };
    }
  }
  return state;
};

export default menuReducer;
