import {Link} from "react-router-dom";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pizzaImage from "../Images/full-shot-women-eating-delicious-pizza.jpg";
import coffeeDrinkers from "../Images/medium-shot-women-holding-cups.jpg";
import friendsOnCouch from "../Images/side-view-roommates-with-devices-indoors.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="main-image">
          <div className="main-text">
            <Header />
            <h2>Finding Roommates - So you don't have to!</h2>
            <p>
              Tired of bad roommates?
              <em>
                <strong> Look no further!</strong>
              </em>
            </p>
            <p>Pick and Choose through each roommate based on compatability!</p>
            <p>Find your ideal roommate today!</p>
            <p>Create an account below to get started</p>
            <Link>
              <Button className={"btn"}>
                <span>Create Account</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <aside className="aside-2">
        <h4>Find Roommates quick and easy with our powerful matching algorithm!</h4>
        <div className="aside-2-images">
          <img src={pizzaImage} className="aside-2-image-1" alt="Two Roommates enjoying delicious pizza together" />
          <img src={coffeeDrinkers} className="aside-2-image-2" alt="Two elderly women drinking enjoying coffee" />
          <img src={friendsOnCouch} className="aside-2-image-3" alt="Roommates relaxing together in living room" />
        </div>
      </aside>
      <aside className="aside-1">
        <h2>Hear what some of our users had to say about Roomie Mate</h2>
        <div className="card-1 card">
          <h4>This app really works!</h4>
          <p>I found three of my closest friends and roommates through this app!</p>
          <p>
            <em>- Jordan</em>
          </p>
        </div>
        <div className="card-2 card">
          <h4>
            <em>The Best</em> Roommate finding App in the market
          </h4>
          <p>I found room mates within days of using it!</p>
          <p>
            <em>- Aria</em>
          </p>
        </div>
        <div className="card-3 card">
          <h4>I LOVE ROOMIE MATE!</h4>
          <p>Roomie Mate is awesome! I wish I found it sooner!</p>
          <p>
            <em> - Samantha</em>
          </p>
        </div>
      </aside>
      <Footer />
    </>
  );
}
