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

  const [isEditing, setIsEditing] = useState(false);

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

    const GetUser = async () => {
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

    GetUser();
  }, []);

  function handleEditButton() {
    setIsEditing(!isEditing);
  }

  function HandleDeleteInterest(interest) {
    const newInterests = interests.filter((i) => i != interest);
    setInterests(newInterests);
  }

  function AddInterest() {
    if (interestInput == "") {
      return;
    }
    setInterests((interests) => [interestInput, ...interests]);
    setInterestInput("");
  }

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} />
      {isEditing ? (
        <div className="account-page-container">
          <form>
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
              <p className="account-state">
                State:
                <select required value={state} onChange={(e) => setState(e.target.value)}>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
              </p>
              <p className="account-city">
                City: <input value={city} onChange={(e) => setCity(e.target.value)} />
              </p>
              <h3 className="account-interests-header">Interests</h3>
              <input className="interest-input" type="text" value={interestInput} onChange={(e) => setInterestInput(e.target.value)} />
              <div className="add-interest-btn add-interest-btn-edit">
                <button type="button" onClick={AddInterest} disabled={interests.length >= 6}>
                  Add Interest
                </button>
                {interests.length >= 6 ? <p className={interests.length >= 6 && "warning"}>Limit Reached!</p> : <p>{interests.length} of 6</p>}
              </div>
              <div className="account-interests-container-edit">
                {interests.length > 0 &&
                  interests.map((i, index) => (
                    <div className="interest">
                      <p key={index}>
                        {i}
                        <span onClick={() => HandleDeleteInterest(i)}>❌</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <button className="btn account-edit-btn">Save</button>
            <button className="btn account-edit-btn" type="button" onClick={handleEditButton}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div className="account-page-container">
          <h1 className="center mt-5 account-page-header">Account Details</h1>
          <div className="account mt-5">
            <div className="account-avatar">
              <Avatar />
              <h4>{username}</h4>
              <div className={isEditing ? "upload-avatar" : "hidden"}>
                <label for="avatar-image">Upload Image: </label>
                <input className="hidden" type="file" name="image" />
              </div>
            </div>
            <p className="account-firstname">First Name: {firstName}</p>
            <p className="account-lastname">Last Name: {lastName}</p>
            <p className="account-state">State: {state}</p>
            <p className="account-city">City: {city}</p>
            <h3 className="account-interests-header">Interests</h3>
            <div className="account-interests-container-edit">
              {interests.map((i, index) => (
                <div className="interest">
                  <p key={index}>{i}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="btn account-edit-btn" onClick={handleEditButton}>
              Edit
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default Account;
