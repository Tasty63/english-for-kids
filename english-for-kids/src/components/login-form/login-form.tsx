const LoginForm: React.FC = () => {
  return (
    <div className="login-form">
      <div className="login-form__field">
        <input type="text" name="username" className="login-form__username" />
        <label htmlFor="username">username</label>
      </div>
      <div className="login-form__field">
        <input type="password" name="password" className="login-form__password" />
        <label htmlFor="password">password</label>
      </div>
      <footer className="login-form__footer">
        <button className="login-form__button">Cancel</button>
        <button className="login-form__button">Log In</button>
      </footer>
    </div>
  );
};
export default LoginForm;
