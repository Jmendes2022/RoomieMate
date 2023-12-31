import {useState} from "react";
import axios from "axios";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [interests, setInterests] = useState([]);
  const [emailExists, setEmailExists] = useState(true);
  const [userExists, setUserExists] = useState(false);

  function AddInterest() {
    if (interestInput == "") {
      return;
    }
    setInterests((interests) => [interestInput, ...interests]);
    setInterestInput("");
  }

  function HandleDeleteInterest(interest) {
    const newInterests = interests.filter((i) => i != interest);
    setInterests(newInterests);
  }

  function onSubmit(e) {
    e.preventDefault();
    setEmailExists(false);
    setUserExists(false);

    const isLocal = localStorage.getItem("Local");
    let url = isLocal === "true" ? `https://localhost:7230/api/User` : `https://roomiemateapi.azurewebsites.net/api/User`;

    // const apiUrl = "https://localhost:7230/api/User";
    // const apiUrl = `https://roomiemateapi.azurewebsites.net/api/User/`;
    const apiUrl = url;

    const postData = {
      id: " ",
      username: username,
      password: password,
      firstname: firstName,
      lastname: lastName,
      age: age,
      state: state,
      city: city,
      email: email,
      interests: interests,
    };

    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log(response);
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setAge(18);
        setState("");
        setCity("");
        setEmail("");
        setInterestInput("");
        setInterests((interests) => []);
      })
      .catch((error) => {
        console.error(error);

        if (error.response[`Username ${username} already exists`]) {
          setUserExists(true);
        }

        if (error.response[`Email ${email} already exists`]) {
          setEmailExists(true);
        }
      });
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="create-account-container">
          <div>
            <h1>Create an Account</h1>
          </div>
          <form onSubmit={onSubmit}>
            <div className="username-input">
              <label>Username: </label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="password-input">
              <div>
                <label>Password: </label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {password.length < 12 && <p className="criteria-requirements">Must be at least 12 characters</p>}
              </div>
            </div>
            <div>
              <label>First name: </label>
              <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <label>Last name: </label>
              <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="age-input">
              <div>
                <label>Age: </label>
                <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} />
                {age < 18 && <p className="criteria-requirements">Must be 18 Years of age</p>}
              </div>
            </div>
            <div className="location-input">
              <label>State: </label>
              <select required value={state} onChange={(e) => setState(e.target.value)}>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
              <label>City: </label>
              <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="email-input">
              <label>Email: </label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="interests-container">
              <div className="interests-container-header">
                <h3>Interests</h3>
              </div>
              <div>
                <label>Interest: </label>
                <input type="text" value={interestInput} onChange={(e) => setInterestInput(e.target.value)} />
                <div className="add-interest-btn">
                  <button type="button" onClick={AddInterest} disabled={interests.length >= 6}>
                    Add Interest
                  </button>
                  {interests.length >= 6 ? <p className={interests.length >= 6 && "warning"}>Limit Reached!</p> : <p>{interests.length} of 6</p>}
                </div>
                <div className="interests-container-interests">
                  {interests.length > 0 &&
                    interests.map((i, index) => (
                      <div className="interest">
                        <p key={index}>
                          {i}
                          <span onClick={() => HandleDeleteInterest(i)}>❌</span>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="create-account-btn">
              {(userExists && <p className="center warning">Username already exists!</p>) || (emailExists && <p className="center warning">Email already exists!</p>)}
              <button type="submit" className={"btn"}>
                <span>Create Account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
