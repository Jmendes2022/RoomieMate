import React, {useState} from "react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import {Link} from "react-router-dom";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  return (
    <div className="login-container">
      <NavBar />
      <div className="image-background">
        <form className="login-form center">
          <div className="email">
            <label>Email Address</label>
            <div>
              <input type="email" required placeholder="Somebody123@gmail.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input>
              <span className="verification">{emailValue ? "✅" : "❌"}</span>
            </div>
          </div>
          <div className="password">
            <label>Password</label>
            <div>
              <input type="password" required value={passValue} onChange={(e) => setPassValue(e.target.value)}></input>
              <span className="verification">{passValue ? "✅" : "❌"}</span>
            </div>
          </div>
          <Button className="btn">Submit</Button>
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
