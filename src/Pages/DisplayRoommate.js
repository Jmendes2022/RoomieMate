import {React, useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar";
import Avatar from "../Components/Avatar";
import Footer from "../Components/Footer";
import axios from "axios";

const DisplayRoommate = ({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) => {
  const {id} = useParams();
  const [roommate, setRoommate] = useState(null);
  const [introduce, setIsIntroduce] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState();
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const GetRoommate = async () => {
      try {
        const isLocal = localStorage.getItem("Local");
        let url = isLocal === "true" ? `https://localhost:7230/InitData/Roommate/${id}` : `https://roomiemateapi.azurewebsites.net/InitData/Roommate/${id}`;

        // const response = await axios.get(`https://localhost:7230/InitData/Roommate/${id}`);
        // const response = await axios.get(`https://roomiemateapi.azurewebsites.net/InitData/Roommate/${id}`);

        const response = await axios.get(url);
        const user = await response.data;
        setRoommate(user);
        console.log("Roommate Found");
        console.log(user);
      } catch (error) {
        console.log("failed to fetch roommmate");
        console.log(error);
      }
    };
    GetRoommate();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const isLocal = localStorage.getItem("Local");
    const id = localStorage.getItem("Id");
    let url = isLocal === "true" ? `https://localhost:7230/api/User/Introduce` : `https://roomiemateapi.azurewebsites.net/api/User/Introduce`;

    const apiUrl = url;

    const postData = {
      Id: id,
      AiUserId: roommate.id,
    };

    await axios
      .put(apiUrl, postData)
      .then((response) => {
        console.log(response);
        setIsIntroduce(false);
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} onHandleAvatar={onHandleAvatar} avatar={avatar} />
      {roommate && (
        <div className="account-page-container">
          <h1 className="center mt-5 account-page-header">Account Details</h1>
          <div className="account mt-5">
            <div className="account-avatar">
              <Avatar className={"account-avatar-Image"} onHandleAvatar={onHandleAvatar} avatarUrl={roommate.userimageurl} />
              <h4>{roommate.username}</h4>
            </div>
            <p className="account-firstname">First Name: {roommate.firstName}</p>
            <p className="account-lastname">Last Name: {roommate.lastName}</p>
            <p className="account-state">State: {roommate.state}</p>
            <p className="account-city">City: {roommate.city}</p>
            <h3 className="account-interests-header">Interests</h3>
            <div className="account-interests-container">
              {roommate.activities.map((i, index) => (
                <div className="interest" key={index}>
                  <p key={index}>{i}</p>
                </div>
              ))}
            </div>
          </div>
          {introduce && (
            <>
              <div>
                <form className="introduce-form center mt-5 mb-5" onSubmit={handleSubmit}>
                  <h1>Send a hello message to {roommate.username}!</h1>
                  <div className="first-name contact-field"></div>
                  <div className="mt-2 message">
                    <h2>Message</h2>
                    <textarea className="mt-2 pl-1 pr-1" value={textAreaValue} placeholder={`Hey ${roommate.username}! I recently connected with you and thought that we would make a great match! Let's Chat!`} onChange={(e) => setTextAreaValue(e.target.value)} />
                    <div>
                      <button className="btn" type="submit">
                        Send
                      </button>
                      <button className="btn ml-1" type="button" onClick={() => setIsIntroduce(!introduce)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
          {messageSent && (
            <div className="text-center mt-2">
              <h3>
                <em>Message Sent!</em>
              </h3>
            </div>
          )}
          <div className="center ">
            {introduce || (
              <>
                {messageSent || (
                  <button className="mr-1 btn" onClick={() => setIsIntroduce(true)}>
                    Say Hi!
                  </button>
                )}
                <Link to="/ConnectedRoommates">
                  <button className="ml-1 btn">Return</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {roommate === null && (
        <div className="account-page-container center">
          <h3 className="mt-10">Fetching User....</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DisplayRoommate;
