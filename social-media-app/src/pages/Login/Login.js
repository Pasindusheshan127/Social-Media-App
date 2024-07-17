import { useRef } from "react";
import "./Login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };

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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              placeholder="Email"
              type="email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              minLength={"6"}
              required
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
