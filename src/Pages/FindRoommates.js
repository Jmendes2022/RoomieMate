import {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import {FcApproval} from "react-icons/fc";
import {FcCancel} from "react-icons/fc";

const FindRoommates = ({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) => {
  const [style, setStyle] = useState("");
  const [users, setUsers] = useState([]);
  const [currentRoommate, setCurrentRoommate] = useState(null);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.document.title = "Find Roommates | RoomieMate";

    const GetAiUsers = async () => {
      const id = localStorage.getItem("Id");

      try {
        // const response = await axios.get(`https://localhost:7230/InitData/${id}`);
        const response = await axios.get(`https://roomiemateapi.azurewebsites.net/InitData/${id}`);
        const usersList = await response.data;
        setUsers([usersList][0]);
        console.log(users);
      } catch (error) {
        alert("failed to fetch users");
        setError(error);
        console.log("failed to fetch users");
      }
    };

    GetAiUsers();
  }, []);

  useEffect(() => {
    const SetRoommate = () => {
      if (users && users.length > 0) {
        setCurrentRoommate(users[0]);
      }
    };

    SetRoommate();
    console.log(currentRoommate);
  }, [users]);

  async function GetMoreUsers() {
    // const postResponse = await axios.post("https://localhost:7230/InitData/100");
    const postResponse = await axios.post(`https://roomiemateapi.azurewebsites.net/api/InitData/100`);
    console.log(postResponse + " post response");

    // const getResponse = await axios.get("https://localhost:7230/InitData");
    const getResponse = await axios.get(`https://roomiemateapi.azurewebsites.net/api/InitData`);
    const usersList = await getResponse.data;
    setUsers([usersList][0]);
  }

  function GetNewUser(id) {
    if (id === null) {
      return;
    }

    const leftoverUsers = users.filter((u) => u.id != id);
    setUsers(leftoverUsers);
    setCurrentRoommate(users[0]);
  }

  function handleApprove(id) {
    setLikedUsers((likedUsers) => [...likedUsers, id]);
    postUsers();
    console.log(likedUsers);
    setStyle("roommate-card-accept");
    setTimeout(() => {
      GetNewUser(id);
      setStyle("");
    }, "2000");
  }

  function handleDelete(id) {
    setDislikedUsers((dislikedUsers) => [...dislikedUsers, id]);
    postUsers();
    console.log(dislikedUsers);
    setStyle("roommate-card-delete");
    setTimeout(() => {
      GetNewUser(id);
      setStyle("");
    }, "2000");
  }

  function postUsers() {
    if (likedUsers.length + dislikedUsers.length >= 3) {
      const id = localStorage.getItem("Id");

      if (id === null) {
        return;
      }

      // const apiUrl = "https://localhost:7230/api/User/SaveUsers";
      const apiUrl = `https://roomiemateapi.azurewebsites.net/api/User/SaveUsers`;

      const putData = {
        id: id,
        likedUsers: likedUsers,
        dislikedUsers: dislikedUsers,
      };

      axios
        .put(apiUrl, putData)
        .then((response) => {
          console.log(response);
          setLikedUsers([]);
          setDislikedUsers([]);
        })
        .catch((error) => {
          console.error(error.response["data"]);
        });
    }
  }

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} onHandleAvatar={onHandleAvatar} avatar={avatar} />
      <div className="roommate-container">
        <Header />
        <div className="instructions">
          <h2 className="how-it-works">Start Matching!</h2>
          <h2 className="accept">
            Click the
            <span>
              <FcCancel size={40} />
            </span>
            button to decline
          </h2>
          <h2 className="decline">
            Click the
            <span>
              <FcApproval size={40} />
            </span>
            button to accept
          </h2>
        </div>
        <div>
          {currentRoommate ? (
            <Card id={currentRoommate.id} className={`roommate-card center ${style}`}>
              <img src={currentRoommate.userimageurl} placeholder={"🤷‍♀️"} alt="" className="roommate-avatar" />
              <h3>{currentRoommate.username}</h3>
              <div className="attributes">
                {currentRoommate.activities.map((activity, index) => (
                  <span className="attributes-span" key={index}>
                    {activity}
                  </span>
                ))}
              </div>
              <div className="information">
                <span className="gender">
                  <strong>Gender:</strong> {currentRoommate.gender}
                </span>
                <span className="age">
                  <strong>Age:</strong> {currentRoommate.age}
                </span>
                <span className="city">
                  <strong>City:</strong> {currentRoommate.city}
                </span>
                <span className="state">
                  <strong>State:</strong> {currentRoommate.state}
                </span>
              </div>
              <div className="card-buttons">
                <span>
                  <FcCancel onClick={() => handleDelete(currentRoommate.id)} className="delete-icon" size={50} />
                </span>
                <span>
                  <FcApproval onClick={() => handleApprove(currentRoommate.id)} className="accept-icon" size={50} />
                </span>
              </div>
            </Card>
          ) : (
            <Card>{error ? <h2>Something unexpected happened...Try again later</h2> : <h2 className="center">Fetching Roommates...</h2>}</Card>
          )}
        </div>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
};

export default FindRoommates;
