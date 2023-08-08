import {Link} from "react-router-dom";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import ClipLoader from "react-spinners/ClipLoader";
import {LazyLoadImage} from "react-lazy-load-image-component";
import pizzaImage from "../Images/full-shot-women-eating-delicious-pizza.jpg";
import coffeeDrinkers from "../Images/medium-shot-women-holding-cups.jpg";
import friendsOnCouch from "../Images/side-view-roommates-with-devices-indoors.jpg";
import {useEffect, useState} from "react";
import Testimonial from "../Components/Testimonial";
import ImageSkeleton from "../Components/ImageSkeleton";

export default function Home() {
  useEffect(() => {
    document.title = "Home | RoomieMate";
  }, []);

  const [loadedImages, setLoadedImages] = useState([]);

  function handleOnLoad(id) {
    setLoadedImages((loadedImages) => setLoadedImages([...loadedImages, id]));
  }

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="main-image">
          <div className="main-text">
            <Header />
            <Hero />
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
          <LazyLoadImage src={pizzaImage} loading="lazy" className="aside-2-image-1" alt="Two Roommates enjoying delicious pizza together" />
          <LazyLoadImage src={coffeeDrinkers} loading="lazy" className="aside-2-image-2" alt="Two elderly women drinking enjoying coffee" />
          <LazyLoadImage src={friendsOnCouch} loading="lazy" className="aside-2-image-3" alt="Roommates relaxing together in living room" />
        </div>
      </aside>
      <aside className="aside-1">
        <h2>Hear what some of our users had to say about Roomie Mate</h2>
        <Testimonial className={"card-1"}>
          <h4>This app really works!</h4>
          <p>I found three of my closest friends and roommates through this app!</p>
          <p>
            <em>- Jordan</em>
          </p>
        </Testimonial>
        <Testimonial className="card-2">
          <h4>
            <em>The Best</em> Roommate finding App in the market
          </h4>
          <p>I found room mates within days of using it!</p>
          <p>
            <em>- Aria</em>
          </p>
        </Testimonial>
        <Testimonial className="card-3">
          <h4>I LOVE ROOMIE MATE!</h4>
          <p>Roomie Mate is awesome! I wish I found it sooner!</p>
          <p>
            <em> - Samantha</em>
          </p>
        </Testimonial>
      </aside>
      <Footer />
    </>
  );
}
