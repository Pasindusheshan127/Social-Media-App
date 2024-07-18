import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../api/ApiCall";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
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
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? "loading" : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? "loading" : "Create a New Account"}
            </button>
            {/* {error && <span className="loginError">Something went wrong...</span>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
