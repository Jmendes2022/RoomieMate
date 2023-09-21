import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Avatar from "../Components/Avatar";
import axios from "axios";

const Account = ({user, onHandleSetUser, handleShowMessages}) => {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [interests, setInterests] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    function GetAvatarUrl() {
      if (localStorage.getItem("Username") == null) navigate("/");
      const avatarUrl = localStorage.getItem("AvatarUrl");
      if (avatarUrl != null) {
        setAvatar(avatarUrl);
      }
    }

    GetAvatarUrl();
  }, [avatar]);

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    window.document.title = "Account | RoomieMate";

    const GetAiUsers = async () => {
      const id = localStorage.getItem("Id");

      try {
        const response = await axios.get(`https://localhost:7230/api/User/${id}`);
        const user = await response.data;

        setUsername(user["username"]);
        setFirstName(user["firstname"]);
        setLastName(user["lastname"]);
        setState(user["state"]);
        setCity(user["city"]);
        setInterests(user["interests"]);

        console.log(user);
      } catch (error) {
        alert("failed to fetch user");
        console.log("failed to fetch user");
      }
    };

    GetAiUsers();
  }, []);

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} />
      <div className="account-page-container">
        <h1 className="center mt-5 account-page-header">Account Details</h1>
        <div className="account mt-5">
          <div className="account-avatar">
            <Avatar />
            <h4>{username}</h4>
            <div className="upload-avatar">
              <label for="avatar-image">Upload Image: </label>
              <input type="file" name="image" />
            </div>
          </div>
          <p className="account-firstname">First Name: {firstName}</p>
          <p className="account-lastname">Last Name: {lastName}</p>
          <p className="account-state">State: {state}</p>
          <p className="account-city">City: {city}</p>
          <h3 className="account-interests-header">Interests</h3>
          <div className="account-interests-container">
            {interests.map((i, index) => (
              <div className="account-interests">
                <p key={index}>{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Account;
