import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import {useEffect} from "react";

export default function About({user, onHandleSetUser, handleShowMessages}) {
  useEffect(() => {
    document.title = "About | Roomie Mate";
  }, []);

  return (
    <>
      <div className="container">
        <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} />
        <div className="about center">
          <h1 className="mt-5 text-center">Welcome to RoomieMate!</h1>
          <h3 className="center">
            <span>Your Perfect Match Awaits</span>
          </h3>
          <p>Are you in search of the ideal roommate to share your living space? Look no further! RoomieMate is your ultimate platform for effortlessly connecting with compatible roommates who share your lifestyle, preferences, and values.</p>
          <h3 className="center">
            <span>Why Choose RoomieMate?</span>
          </h3>
          <p>Finding the right roommate can be a daunting task, but RoomieMate makes the process simple, efficient, and enjoyable. Our user-friendly interface and advanced matching algorithms take the stress out of roommate hunting, ensuring that you find a harmonious living arrangement that suits your needs.</p>
          <h3 className="center">
            <span>Key Features</span>
          </h3>
          <div className="key-features-container">
            <Card className={"kf-card"}>
              <h4>
                <span>Smart Matching</span>
              </h4>
              <span>Our Cutting-edge algorithm analyzes your preferences, interests, and habits to suggest potential roommates who align with your lifestyle.</span>
            </Card>
            <Card className={"kf-card"}>
              <h4>
                <span>Comprehensive Profiles</span>
              </h4>
              <span>Get to know your potential roommates through detailed profiles, including their hobbies, work schedules, cleanliness habits, and more.</span>
            </Card>
            <Card className={"kf-card"}>
              <h4>
                <span>Secure Messaging</span>
              </h4>
              <span>Communicate safely through our built-in messaging system, allowing you to discuss expectations, habits, and requirements before committing to a roommate.</span>
            </Card>
            <Card className={"kf-card"}>
              <h4>
                <span>Verified Users</span>
              </h4>
              <span>Rest easy knowing that all RoomieMate users are verified, adding an extra layer of security to your roommate search.</span>
            </Card>
            <Card className={"kf-card"}>
              <h4>
                <span>Roommate Agreement Templates</span>
              </h4>
              <span>Streamline the moving-in process with our customizable roommate agreement templates, ensuring a clear understanding of responsibilities and expectations.</span>
            </Card>
            <Card className={"kf-card"}>
              <h4>
                <span>Location-Based Search</span>
              </h4>
              <span>Find roommates in your preferred neighborhoods, making it easy to establish a convenient and comfortable living situation.</span>
            </Card>
          </div>
          <h3 className="center mt-5">
            <span>How It Works</span>
          </h3>
          <ul className="how-it-works-list">
            <li>
              <h4>
                <span>Create Your Profile</span>
              </h4>
              <span>Tell us about yourself, your lifestyle, and what you're looking for in a roommate. The more detailed your profile, the better your matches will be.</span>
            </li>
            <li>
              <h4>
                <span>Browse Potential Roommates</span>
              </h4>
              <span>Explore profiles and connect with individuals who catch your interest. Our algorithm suggests the best matches based on your preferences.</span>
            </li>
            <li>
              <h4>
                <span>Chat and Connect</span>
              </h4>
              <span>Initiate conversations with potential roommates through our secure messaging system. Discuss your living habits, expectations, and any concerns you may have.</span>
            </li>
            <li>
              <h4>
                <span>Meet in Person</span>
              </h4>
              <span>Once you've found a promising match, arrange to meet in person or virtually to get to know each other better and ensure compatibility.</span>
            </li>
            <li>
              <h4>
                <span>Move In and Thrive</span>
              </h4>
              <span>Once you've found your ideal roommate, move in and embark on a new chapter of shared experiences, mutual support, and lasting memories.</span>
            </li>
          </ul>
          <p className="text-center border-box">
            <em>Join RoomieMate today and embark on a roommate search like never before. Create your profile, browse potential matches, and discover the perfect co-living companion. Your ideal roommate is just a few clicks away!</em>
          </p>
          <h2 className="text-center">
            <em>RoomieMate: Where Connections Make a Home.</em>
          </h2>
        </div>
        <Footer />
      </div>
    </>
  );
}
