import { useState } from "react";

function Login() {
  const [active, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = name => {
    return event => {
      setLoginData({ ...loginData, [name]: event.target.value });
    };
  };
  const login = event => {
    console.log("login");
    event.preventDefault();
    const data = {
      username: document.getElementById("loginUsername").value,
      password: document.getElementById("loginPassword").value,
    };
    fetch("http://127.0.0.1/blog-be/api.php?resource=users&action=login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          document.cookie = `loggedInUser=${data.user.username}; role=${data.user.role}; path=/`;

          alert(`Witaj ${data.user.username}, logowanie przebiegło pomyślnie`);
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error("Error:", error));
  };
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
          <form id="form" onSubmit={login}>
            <input
              type="text"
              id="loginUsername"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onChange={handleChange("username")}
              required
            />

            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange("password")}
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
