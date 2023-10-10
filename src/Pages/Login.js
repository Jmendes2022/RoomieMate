import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import axios from "axios";
import {Route, Routes, useNavigate} from "react-router-dom";

const Login = ({user, onHandleSetUser, onHandleAvatar}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.document.title = "Login | RoomieMate";
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    // const apiUrl = "https://localhost:7230/api/User/login";
    // const apiUrl = "https://roomiemateapi.azurewebsites.net/api/User/login";

    const isLocal = localStorage.getItem("Local");
    let url = isLocal === "true" ? `https://localhost:7230/api/User/login` : `https://roomiemateapi.azurewebsites.net/api/User/login`;

    const apiUrl = url;

    const postData = {
      username: username,
      password: password,
    };

    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("Id", response.data.id);
        localStorage.setItem("Username", response.data.username);
        localStorage.setItem("AvatarUrl", response.data.avatarUrl);
        onHandleSetUser(response.data.username);
        onHandleAvatar(response.data.userimageurl);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.response["data"]);
        setError(error.response["data"]);
      });

    setUsername("");
    setPassword("");
  }

  function AutoFillInfo() {
    setUsername("Jmendes20223");
    setPassword("password");
  }

  return (
    <div className="login-container">
      <NavBar user={user} onHandleSetUser={onHandleSetUser} onHandleAvatar={onHandleAvatar} />
      <div className="image-background">
        <form className="login-form center" onSubmit={onSubmit}>
          <div className="email">
            <label>Username</label>
            <div>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
          </div>
          <div className="password">
            <label>Password</label>
            <div>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
          </div>
          {error && <p className="warning ">{error}</p>}
          <button type="submit" className="btn">
            Sign In
          </button>
          <button className="btn" type="button" onClick={AutoFillInfo}>
            Auto Fill (Testing)
          </button>
          <div className="forgot-pass">
            <Button>
              <p>Forgot Password?</p>
            </Button>
            <Button>
              <p>Forgot User?</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
