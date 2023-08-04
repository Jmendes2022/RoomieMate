import {Link} from "react-router-dom";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Header />
        <div className="main-text">
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
        <Footer />
      </div>
    </>
  );
}
