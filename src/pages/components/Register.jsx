import { useState } from "react";

function Register() {
  const [activeRegister, setIsActiveRegister] = useState(false);
  const register = event => {
    console.log("register");
    event.preventDefault();
    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
    };
    fetch("http://127.0.0.1/blog-be/api.php?resource=users&action=register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error("Error:", error));
  };
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
          <form id="form" onSubmit={register}>
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
