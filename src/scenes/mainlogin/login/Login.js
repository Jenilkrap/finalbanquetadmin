import React, { useState } from 'react';
import './Login.css';
import logo from './banquetcrm.png'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let Tempemail = 'banquetadmin@gmaiil.com'
    let Temppassword = 'banquet@999'
    console.log(password)
    console.log(email)
    if(Tempemail===email && Temppassword===password){
      localStorage.setItem('logged',true)
      navigate('/dashboard')
    }else{
      alert('Incorrect Credentials')
    }
    // Perform authentication logic here
  }

  return (
    <div className="fluid">

      <div className="form-container">
      <div className="header">
        <div className="header-left">
          <Link to="/tickets" className="header-btn">Tickets</Link>

        </div>
        
        <div className="header-right">
        <Link to="/enquire" className="header-btn">Enquire Us</Link>

        </div>
        
        <div className="header-center">
          <img src={logo} alt="Banquet CRM" className="logo" />
        </div>
        
      </div>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group checkbox checkbox-container">
            <label>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              Keep me signed in
            </label>
          </div>
          <div className="form-group login">
            <button type="submit" className="btn-login">Log In</button>
          </div>
          <div className="form-group">
            <Link to="/forgot" className="forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { Button, Form, Row, Col, Container } from "react-bootstrap";
// import axios from "axios";

// const Login = ({ history }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const data = {
//         email,
//         password,
//       };
//       await axios.post("http://localhost:3000/login", data);
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }

//     console.log(email, password);
//   };

//   return (
//     <div
//       fluid
//       style={{
//         position: "fixed",
//         height: "100%",
//         width: "100%",
//         backgroundColor: "#0b3c5d",
//       }}
//     >
//       <Container
//         style={{
//           marginLeft: "540px",
//           marginTop: "100px",
//         }}
//       >
//         <h1 className="my-3" style={{ color: "white" }}>
//           Sign In
//         </h1>
//         <Row>
//           <Col md={6}>
//             <Form onSubmit={onSubmitHandler}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label style={{ color: "white" }}>
//                   Email address
//                 </Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label style={{ color: "white" }}>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="submit"
//                 style={{
//                   backgroundColor: "#328cc1",
//                   borderColor: "white",
//                   marginTop: "10px",
//                 }}
//               >
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;
