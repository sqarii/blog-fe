import { useState } from "react";

function Login() {
  const [active, setIsActive] = useState(false);

  const handleLogin = () => {
    setIsActive(!active);
  };

  return (
    <>
      <div className="login">
        <button onClick={handleLogin} className="log-btns">
          LOGIN
        </button>
        {active ? (
          <form id="form">
            <input
              type="text"
              id="loginUsername"
              placeholder="Username"
              required
            />
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              required
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Login;
