import { LOGIN_FAILED, LOGIN_SUCCEED, LOGOUT, TOGGLE_LOGIN_POPUP, INIT_LOGIN } from '../action-constants';
import { LoginActionType, LoginState } from '../../app.api';

const LoginInitialState: LoginState = {
  isPopUpOpened: false,
  isLogged: false,
  message: undefined,
  userData: { token: null, userId: null },
};

const LoginReducer = (state = LoginInitialState, action: LoginActionType): LoginState => {
  if (action.type === TOGGLE_LOGIN_POPUP) {
    return { ...state, isPopUpOpened: !state.isPopUpOpened };
  }

  if (action.type === INIT_LOGIN) {
    return { ...state, isLogged: true, userData: action.userData };
  }

  if (action.type === LOGIN_SUCCEED) {
    return { ...state, isLogged: true, userData: action.userData };
  }

  if (action.type === LOGIN_FAILED) {
    return { ...state, message: action.message };
  }

  if (action.type === LOGOUT) {
    return { ...state, userData: { token: null, userId: null }, isLogged: false };
  }
  return state;
};

export default LoginReducer;
