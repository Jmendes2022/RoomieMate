import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import axios from "axios";

const Login = ({user, onHandleSetUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.document.title = "Login | RoomieMate";
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const apiUrl = "https://localhost:7230/api/User/login";

    const postData = {
      username: username,
      password: password,
    };

    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data["token"]);
        onHandleSetUser(response.data["username"]);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error.response["data"]);
        setError(error.response["data"]);
      });

    setUsername("");
    setPassword("");
  }

  return (
    <div className="login-container">
      <NavBar user={user} onHandleSetUser={onHandleSetUser} />
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
