import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Login.css";
function LoginPatient() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [title, setTitle] = useState("Welcome to KKD");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTitle("Welocme to KKD, You are logging in as PCP");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a Valid Email Address";
    } else if (values.email != "kkdtestuser@development.com") {
      errors.email = "Enter correct username";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <>
      <div className="nav">
        <p className="signUp">Sign Up</p>
      </div>
      <div className="split">
        <div className="splitLeft">
          {/* <img src="https://th.bing.com/th/id/OIP.QZ9njSUoKxY-xNHygylPjAHaF0?pid=ImgDet&w=805&h=633&rs=1"/> */}
        </div>
        <div className="splitRight">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in Successfully</div>
          ) : (
            console.log(formValues)
          )}
          <div className="heading">{title}</div>
          <form onSubmit={handleSubmit}>
            {/* <div className="field"> */}
            {/* <label>Username</label> */}
            {/* <input type="text" 
              name="username" 
              placeholder="username" 
              className='no-outline'
              value={formValues.username}
              onChange={handleChange}/>
            </div> */}
            {/* <p>{ formErrors.username}</p> */}
            <div className="field">
              {/* <label>Email</label> */}
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="no-outline"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="no-outline"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="submits">Log In</button>
          </form>
          {/* <a href="LoginDoc.js"><div className='doctor'>Login as doctor</div></a>
        <a href="LoginPatient.js"><div className='patient'>Login as patient</div></a> */}
          <div className="doctor">
            <Link className="link" to="/">
              Login as doctor
            </Link>
          </div>
          <div className="patient">
            <Link className="link" to="pat">
              Login as patient
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPatient;
