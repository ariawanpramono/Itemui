import React, { Component,useState } from "react";
import "bootstrap";
import "../LoginRegister.css";

export default function Register() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstname: e.target.value})
  }
  const handleLastNameInputChange = (e) => {
    setValues({...values, lastname: e.target.value})
  }
  const handleEmailInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }
  
    return (
      <div className="container_signup">
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              onChange={handleFirstNameInputChange}
              value={values.firstname}
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstname"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              onChange={handleLastNameInputChange}
              value={values.lastname}
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              onChange={handleEmailInputChange}
              value={values.email}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/pages/login">sign in?</a>
          </p>
        </form>
      </div>
    );
}
