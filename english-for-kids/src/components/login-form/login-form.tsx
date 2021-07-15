import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    username: 'admin',
    password: 'admin',
  });

  const changeHandler = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__field">
        <input
          type="text"
          name="username"
          className="login-form__username"
          value={form.username}
          onChange={changeHandler}
        />
        <label htmlFor="username">username</label>
      </div>
      <div className="login-form__field">
        <input
          type="password"
          name="password"
          className="login-form__password"
          value={form.password}
          onChange={changeHandler}
        />
        <label htmlFor="password">password</label>
      </div>
      <footer className="login-form__footer">
        <button className="login-form__button" type="button">
          Cancel
        </button>
        <button className="login-form__button" type="submit">
          Log In
        </button>
      </footer>
    </div>
  );
};
export default LoginForm;
