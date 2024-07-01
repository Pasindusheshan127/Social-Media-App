import "./Register.css";

const Register = () => {
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
            <input className="loginInput" placeholder="Username" type="text" />
            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <input
              className="loginInput"
              placeholder="Password again"
              type="password"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
