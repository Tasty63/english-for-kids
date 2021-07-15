import { TOGGLE_LOGIN_POPUP } from '../action-constants';
import { LoginActionType, LoginState } from '../../app.api';

const LoginInitialState: LoginState = {
  isPopUpOpened: false,
  isLogged: false,
};

const LoginReducer = (state = LoginInitialState, action: LoginActionType): LoginState => {
  if (action.type === TOGGLE_LOGIN_POPUP) {
    return { ...state, isPopUpOpened: !state.isPopUpOpened };
  }
  return state;
};

export default LoginReducer;
