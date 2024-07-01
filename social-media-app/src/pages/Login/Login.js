import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo"> niceSocial </h3>
          <span className="login-desc">
            Connect with friends and the world around you on niceSocial
          </span>
        </div>
        <div className="login-right">
          <div className="loginBox">
            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
