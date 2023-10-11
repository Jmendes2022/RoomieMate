import {useState, useEffect} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ConnectedRoommates({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar, handleSetIntroduced}) {
  const [likedUsers, setLikedUsers] = useState([]);
  const [introducedUsers, setIntroducedUsers] = useState([]);

  useEffect(() => {
    window.document.title = "Connections | RoomieMate";

    const GetConnections = async () => {
      const id = localStorage.getItem("Id");

      try {
        // const response = await axios.get(`https://localhost:7230/api/User/Connections/${id}`);
        // const response = await axios.get(`https://roomiemateapi.azurewebsites.net/api/User/Connections/${id}`);
        const isLocal = localStorage.getItem("Local");
        let url = isLocal === "true" ? `https://localhost:7230/api/User/Connections/${id}` : `https://roomiemateapi.azurewebsites.net/api/User/Connections/${id}`;

        const response = await axios.get(url);
        const likedUsers = await response.data;

        setLikedUsers(likedUsers.allConnections);
        setIntroducedUsers(likedUsers.introducedUsers);
        console.log(`${likedUsers.allConnections.length} Connections Fetched`);
        console.log(likedUsers.allConnections);
      } catch (error) {
        alert("failed to fetch connections");
        console.log("failed to fetch connections");
      }
    };

    GetConnections();
  }, []);

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} onHandleAvatar={onHandleAvatar} avatar={avatar} />
      <div className="account-page-container">
        <div className="center mt-5">
          <h1>Your Connections</h1>
        </div>
        <div className="connections-grid mt-5">
          {likedUsers ? (
            likedUsers.map((u) => (
              <Card key={u.id} className={"connected-roommate-card"}>
                <Link to={`/DisplayRoommate/${u.id}`}>
                  <img src={u.userimageurl} className="roommate-avatar" />
                  <h3 className="center">{u.username}</h3>
                </Link>
                {introducedUsers.includes(u.id) && (
                  <p className="introduced text-center">
                    <em>Message Sent!</em>✅
                  </p>
                )}
              </Card>
            ))
          ) : (
            <h3>You currently do not have any connections</h3>
          )}
        </div>
        <div className="center">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
