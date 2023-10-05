import {React, useEffect, useState} from "react";
import {useParams} from "react-router";
import NavBar from "../Components/NavBar";
import Avatar from "../Components/Avatar";
import axios from "axios";

const DisplayRoommate = ({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) => {
  const {id} = useParams();
  const [roommate, setRoommate] = useState(null);

  useEffect(() => {
    const GetRoommate = async () => {
      try {
        const response = await axios.get(`https://localhost:7230/InitData/Roommate/${id}`);
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
        </div>
      )}
      {roommate === null && (
        <div className="account-page-container center">
          <h3 className="mt-10">Fetching User....</h3>
        </div>
      )}
    </>
  );
};

export default DisplayRoommate;
