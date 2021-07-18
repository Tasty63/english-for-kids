import './login-form.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormType } from '../../app.api';
import { toggleLoginPopUp, tryLogin } from '../../redux/actions';
import { RootState } from '../../redux/store';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<LoginFormType>({
    username: 'admin',
    password: 'admin',
  });

  const message = useSelector((state: RootState) => state.login.message);

  const handleChange = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmit = (event: React.MouseEvent, formData: LoginFormType) => {
    event.preventDefault();
    dispatch(tryLogin(formData));
    dispatch(toggleLoginPopUp());
  };

  return (
    <form className="login-form">
      <h5 className="login-form__title">Login</h5>
      {message && <div className="login-form__message">{message}</div>}
      <div className="login-form__field">
        <label htmlFor="username" className="login-form__label">
          Username:
        </label>
        <input
          type="text"
          name="username"
          className="login-form__username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div className="login-form__field">
        <label htmlFor="password" className="login-form__label">
          password
        </label>
        <input
          type="password"
          name="password"
          className="login-form__password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <footer className="login-form__footer">
        <button
          className="login-form__button login-form__button_cancel"
          type="button"
          onClick={() => dispatch(toggleLoginPopUp())}
        >
          Cancel
        </button>
        <button
          className="login-form__button login-form__button_submit"
          type="submit"
          onClick={event => handleSubmit(event, form)}
        >
          Log In
        </button>
      </footer>
    </form>
  );
};
export default LoginForm;
