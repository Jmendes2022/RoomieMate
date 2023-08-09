import {useState, useEffect} from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import {FcApproval} from "react-icons/fc";
import {FcCancel} from "react-icons/fc";

const FindRoommates = ({user}) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setAvatar("https://i.pravatar.cc/350");
  }, []);

  return (
    <>
      <NavBar user={user} />
      <div className="roommate-container">
        <Header />
        <div className="instructions">
          <h2 className="how-it-works">How Does it work?</h2>
          <h2 className="accept">
            Click the
            <span>
              <FcCancel className="delete-icon" size={50} />
            </span>
            button to decline
          </h2>
          <h2 className="decline">
            <span>Click the</span>
            <FcApproval className="accept-icon" size={50} />

            <span>button to accept</span>
          </h2>
        </div>
        <div className="roommate">
          {avatar && (
            <Card className="roommate-card">
              <img src={avatar} className="roommate-avatar" />
              <h3>Jmendes2022</h3>
              <div className="attributes">
                <span>Hiking</span>
                <span>Archery</span>
                <span>Programming</span>
                <span>Gaming</span>
                <span>Gaming</span>
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
