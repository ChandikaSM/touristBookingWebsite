import React, { useState } from "react";
import "./Sign.css";
import axios from "axios";

const Signup = ({ isSignUpOpen, close }) => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenuRemove = () => {
    setIsOpen("close");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        name,
        email,
        phone,
        password,
        address,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <section className={`flex signp signupModal ${isSignUpOpen ? "open" : ""}`}>
      <div className="imgDiv">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
          alt="logo"
        />
      </div>
      <div className="registrationContainer">
        <h2>{login ? "Login" : "Signup"}</h2>
        <form className="registrationForm" onSubmit={handleSubmit}>
          {!login && (
            <>
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone No</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!login && (
            <div className="formGroup">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          )}
          <div className="cen">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
          <div className="flex endSign">
            <span>
              {login ? "Don't have an account? " : "Already have an account? "}
            </span>
            <span onClick={toggleLogin} className="option">
              {login ? "Signup" : "Login"}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
