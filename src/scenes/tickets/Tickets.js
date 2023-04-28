import React, { useState } from "react";
import "./Tickets.css";
import logo from "./banquetcrm.png";
import { Link } from 'react-router-dom';



const Form = () => {
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("");
  const [total, setTotal] = useState("");
  const [deposit, setDeposit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (!event || !tickets || !quantity || !subTotal || !tax || !total || !deposit) {
      alert("Please fill all the fields.");
      return;
    }
    console.log("Form submitted successfully!");
    // Clear the form after submission
    setEvent("");
    setTickets("");
    setQuantity("");
    setSubTotal("");
    setTax("");
    setTotal("");
    setDeposit("");
  };

  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  const handleTicketsChange = (e) => {
    setTickets(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value) || 0;
    const subTotal = parseInt(tickets) * quantity;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;
    setQuantity(quantity);
    setSubTotal(subTotal);
    setTax(tax);
    setTotal(total);
  };

  const handleDepositChange = (e) => {
    setDeposit(e.target.value);
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
            <label htmlFor="event">Event*:</label>
            <select id="event" value={event} onChange={handleEventChange}>
              <option value="">Select an event</option>
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
              <option value="event3">Event 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="tickets">Tickets*:</label>
            <input id="tickets" type="number" value={tickets} onChange={handleTicketsChange} />
          </div>
          <div>
            <label htmlFor="quantity">Quantity*:</label>
            <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} />
          </div>
          <div>
            <label htmlFor="subTotal">Sub Total*:</label>
            <input id="subTotal" type="number" value={subTotal} readOnly />
          </div>
          <div>
            <label htmlFor="tax">Tax*:</label>
            <input id="tax" type="number" value={tax} readOnly />
          </div>
          <div>
            <label htmlFor="total">Total*:</label>
            <input id="total" type="number" value={total} readOnly />
          </div>
          <div>
            <label htmlFor="deposit">Deposit*:</label>
            <input id="deposit" type="number" value={deposit} onChange={handleDepositChange} />

      </div>

      <div className="form-group submit">
            <button type="submit" className="btn-submit">Submit</button>
          </div>
      <div className="form-group">
            <Link to="/login" className="forgot-password">Login?</Link>
          </div>
    </form>
    </div>
    </div>
  );
};

export default Form;
