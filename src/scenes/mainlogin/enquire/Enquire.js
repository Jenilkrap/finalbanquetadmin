import React, { useState } from "react";
import logo from "./banquetcrm.png";
import { Link } from 'react-router-dom';
import "./Enquire.css"

const Enquire = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    const errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!contactNo) {
      errors.contactNo = "Contact number is required.";
    } else if (!/^[0-9]{10}$/.test(contactNo)) {
      errors.contactNo = "Invalid contact number format.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log("Form submitted successfully!");

    // Clear the form after submission
    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
    setErrors({});
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="fluid">
      <div className="form-container">
        <div className="header">
          <div className="header-center">
            <img src={logo} alt="Banquet CRM" className="logo" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="contactNo">Contact No. *</label>
            <input
              id="contactNo"
              type="tel"
              value={contactNo}
              onChange={handleContactNoChange}
            />
            {errors.contactNo && <div className="error">{errors.contactNo}</div>}
          </div>
          <div>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to="/login">Login?</Link>
      </div>
    </div>
  );
};

export default Enquire;
