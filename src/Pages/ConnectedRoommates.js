import {useState, useEffect} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import axios from "axios";
import {Link} from "react-router-dom";
import {PiChatsDuotone} from "react-icons/pi";

export default function ConnectedRoommates({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) {
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    window.document.title = "Connections | RoomieMate";

    const GetConnections = async () => {
      const id = localStorage.getItem("Id");

      try {
        const response = await axios.get(`https://localhost:7230/api/User/Connections/${id}`);
        const likedUsers = await response.data;

        setLikedUsers(likedUsers);
        console.log(`${likedUsers.length} Connections Fetched`);
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
          <h1>All Connections</h1>
        </div>
        <div className="connections-grid mt-5">
          {likedUsers ? (
            likedUsers.map((u) => (
              <Card key={u.id} className={"connected-roommate-card"}>
                <Link>
                  <img src={u.userimageurl} className="roommate-avatar" />
                  <h3 className="center">{u.username}</h3>
                </Link>
              </Card>
            ))
          ) : (
            <h3>You currently do not have any connections</h3>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
