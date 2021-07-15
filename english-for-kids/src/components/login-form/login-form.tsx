import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormType } from '../../app.api';
import { tryLogin } from '../../redux/actions';
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
  };

  return (
    <div className="login-form">
      {message && <div className="login-form__message">{message}</div>}
      <div className="login-form__field">
        <input
          type="text"
          name="username"
          className="login-form__username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="username">username</label>
      </div>
      <div className="login-form__field">
        <input
          type="password"
          name="password"
          className="login-form__password"
          value={form.password}
          onChange={handleChange}
        />
        <label htmlFor="password">password</label>
      </div>
      <footer className="login-form__footer">
        <button className="login-form__button" type="button">
          Cancel
        </button>
        <button className="login-form__button" type="submit" onClick={event => handleSubmit(event, form)}>
          Log In
        </button>
      </footer>
    </div>
  );
};
export default LoginForm;
