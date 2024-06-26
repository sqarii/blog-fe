import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  // funkcja ktora zmienia dane do loginu
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

    sessionStorage.setItem("username", [data.username]);
    sessionStorage.setItem("password", [data.password]);

    fetch(
      "https://jasowiczblog.000webhostapp.com/api.php?resource=users&action=login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: JSON.stringify(data),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          //zapisuje nazwe i role uzytkownika w ciasteczkach
          document.cookie = `role=${data.user.role};`;
          document.cookie = `username=${data.user.username};`;

          //przechowuje id uzytkownika w sessionStorage (pamiec przegladarki resetowana po zamknieciu)
          sessionStorage.setItem("user_id", [data.user.id]);

          alert(`Witaj ${data.user.username}, logowanie przebiegło pomyślnie`);
          window.location.reload();
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error("Error:", error));
  };

  return (
    // tutaj znajduje formularz do loginu
    <div className="login form-cont">
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
    </div>
  );
}
export default Login;
