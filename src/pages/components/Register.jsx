import { useState } from "react";

function Register() {
  const [activeRegister, setIsActiveRegister] = useState(false);
  const handleRegister = () => {
    setIsActiveRegister(!activeRegister);
  };
  return (
    <div className="form">
      <div className="login">
        <button onClick={handleRegister} className="log-btns">
          REGISTER
        </button>
        {activeRegister ? (
          <form id="form">
            <input type="text" id="username" placeholder="Username" required />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <input type="email" id="email" placeholder="Email" required />
            <button className="login-btn" type="submit">
              Register
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Register;
