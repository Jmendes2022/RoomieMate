import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

const ContactUs = ({user, onHandleSetUser, handleShowMessages, onHandleAvatar, avatar}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.document.title = "Contact Us | RoomieMate";
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsSent(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
    console.log("This was a fake request made for a contact page. Email services cost $$ hahaha");
  }

  return (
    <>
      <div className="container">
        <NavBar user={user} onHandleSetUser={onHandleSetUser} handleShowMessages={handleShowMessages} onHandleAvatar={onHandleAvatar} avatar={avatar} />
        <div className="contact-container">
          <div className="contact-header">
            <h1>Please feel free to contact us with the form below</h1>
            <form className="contact-form center" onSubmit={(e) => handleSubmit(e)}>
              <div className="first-name contact-field">
                <label>First Name</label>
                <div>
                  <input type="text" required placeholder="Joe" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                  <span className="verification">{firstName ? "✅" : "❌"}</span>
                </div>
              </div>
              <div className="last-name contact-field">
                <label>Last Name</label>
                <div>
                  <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                  <span className="verification">{lastName ? "✅" : "❌"}</span>
                </div>
              </div>
              <div className="contact-email contact-field">
                <label>Email Address</label>
                <div>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                  <span className="verification">{email ? "✅" : "❌"}</span>
                </div>
              </div>
              <div className="subject contact-field">
                <label>Subject</label>
                <div>
                  <input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                  <span className="verification">{subject ? "✅" : "❌"}</span>
                </div>
              </div>
              <div className="message">
                <label>Message</label>
                <div>
                  <textarea type="text" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <span className="verification">{message ? "✅" : "❌"}</span>
                </div>
              </div>
              <div className="contact-submit">
                {isSent && <h3>Thank you! You will hear from our team within 24 hours</h3>}
                <Button className="btn">Submit</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
