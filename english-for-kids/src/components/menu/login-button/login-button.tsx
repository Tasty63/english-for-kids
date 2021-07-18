import './login-button.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoginPopUp } from '../../../redux/actions';

const LoginButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="menu__login login">
      <button className="login__button" type="button" onClick={() => dispatch(toggleLoginPopUp())}>
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
