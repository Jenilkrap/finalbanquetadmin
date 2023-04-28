import React, { useState } from 'react';
import './Forgot.css';
import logo from './banquetcrm.png';
import { Link } from 'react-router-dom';

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    // Perform password reset logic here
  }

  return (
    <div className="fluid">

      <div className="form-container">
      <div className="header">

        
        <div className="header-center">
          <img src={logo} alt="Banquet CRM" className="logo" />
        </div>
        
      </div>
        <form onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <p>Enter your email address to reset your password.</p>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn-login">Reset Password</button>
          </div>
          <div className="form-group">
            <Link to="/login" className="forgot-password">Login?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
