import "./Register.css";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const Username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: Username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
      } catch (error) {
        console.log(error);
      }
    }
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              className="loginInput"
              placeholder="Username"
              type="text"
              required
              ref={Username}
            />
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
              required
              minLength="6"
              ref={password}
            />
            <input
              className="loginInput"
              placeholder="Password again"
              type="password"
              required
              minLength="6"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">Log into account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
