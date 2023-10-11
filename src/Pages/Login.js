import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({user, onHandleSetUser, onHandleAvatar}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgotLogin, setForgotLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [recovery, setSentRecovery] = useState(false);

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

  function handleSubmitRecovery() {
    setEmail("");
    setSentRecovery(true);
  }

  return (
    <div className="login-container">
      <NavBar user={user} onHandleSetUser={onHandleSetUser} onHandleAvatar={onHandleAvatar} />
      <div className="image-background">
        {forgotLogin || (
          <form className="login-form center" onSubmit={onSubmit}>
            <div className="email">
              <label>Username</label>
              <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
            </div>
            <div className="password">
              <label>Password</label>
              <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
            </div>
            {error && <p className="warning ">{error}</p>}
            <button type="submit" className="btn">
              Sign In
            </button>
            <div className="forgot-pass">
              <Button onClick={() => setForgotLogin(true)}>
                <p>Forgot Password?</p>
              </Button>
              <Button onClick={() => setForgotLogin(true)}>
                <p>Forgot User?</p>
              </Button>
            </div>
          </form>
        )}
        {forgotLogin && (
          <form className="login-form center" onSubmit={onSubmit}>
            {recovery || (
              <div className="email">
                <label>Enter your email address</label>
                <div>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
              </div>
            )}
            {recovery && (
              <div>
                <h3>
                  Recovery Request Sent - <em>Check your email!</em>
                </h3>
              </div>
            )}
            {!recovery ? (
              <Button className={"btn"} onClick={handleSubmitRecovery}>
                Send Recovery
              </Button>
            ) : (
              <Button
                className={"btn"}
                onClick={() => {
                  setSentRecovery(false);
                  setForgotLogin(false);
                }}
              >
                Return
              </Button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
