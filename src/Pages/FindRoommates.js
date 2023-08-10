import {useState, useEffect, useContext} from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import {FcApproval} from "react-icons/fc";
import {FcCancel} from "react-icons/fc";

const FindRoommates = ({user, onHandleSetUser, handleShowMessages}) => {
  const [avatar, setAvatar] = useState(null);
  const [style, setStyle] = useState("");

  useEffect(() => {
    setAvatar("https://i.pravatar.cc/350");
    window.document.title = "Find Roommates | RoomieMate";
  }, []);

  function handleApprove(e) {
    setStyle("roommate-card-accept");
    setTimeout(() => {
      setStyle("");
    }, "500");
    GetNewAvatar();
  }

  function handleDelete(e) {
    setStyle("roommate-card-delete");
    setTimeout(() => {
      setAvatar(null);
      setStyle("");
      GetNewAvatar();
    }, "500");
  }

  async function GetNewAvatar() {
    let num = Math.random(70);
    Math.floor(num) < 1 ? num++ : Math.floor(num);
    await setAvatar(`https://i.pravatar.cc/350?${num}`);
  }

  return (
    <>
      <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} />
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
          {avatar && (
            <Card id="roommate" className={`roommate-card center ${style}`}>
              <img src={avatar} placeholder={"🤷‍♀️"} className="roommate-avatar" />
              <h3>Jmendes2022</h3>
              <div className="attributes">
                <span>Hiking</span>
                <span>Archery</span>
                <span>Programming</span>
                <span>Gaming</span>
                <span>Gaming</span>
              </div>
              <div className="information">
                <span className="gender">
                  <strong>Gender:</strong> Male
                </span>
                <span className="age">
                  <strong>Age:</strong> 28
                </span>
                <span className="city">
                  <strong>City:</strong> Boston
                </span>
                <span className="state">
                  <strong>State:</strong> MA
                </span>
              </div>
              <div className="card-buttons">
                <span>
                  <FcCancel onClick={handleDelete} className="delete-icon" size={50} />
                </span>
                <span>
                  <FcApproval onClick={handleApprove} className="accept-icon" size={50} />
                </span>
              </div>
            </Card>
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
