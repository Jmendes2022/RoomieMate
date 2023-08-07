import {Link} from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../Components/Logo";

export default function NavBar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-btns">
          <Link to={"/"}>
            <Button className="Navbtn">Home</Button>
          </Link>
          <Link to={"/Account"}>
            <Button className="Navbtn">Log in</Button>
          </Link>
          <Link to={"/FindRoomates"}>
            <Button className="Navbtn">Find Roommates</Button>
          </Link>
          <Link>
            <Button to={"/Contact"} className="Navbtn">
              Contact Us
            </Button>
          </Link>
          <Link to={"/About"}>
            <Button className="Navbtn">About</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
