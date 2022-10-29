import React, { Component,useState } from "react";
import "bootstrap";
import "../LoginRegister.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[confPass, setConfPass] = useState('');
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  const registerHandler = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name: name,
        email: email,
        password: password,
        confPassword: confPass
      })
      navigate('/pages/login')
    } catch (error) {
      setMsg(error.response.data.msg)
    }
  }
  
    return (
      <div className="container container_signup text-start col-md-4 col-9">
        <div className="row">
        <form onSubmit={registerHandler}>
          <h3>Sign Up</h3>
          <hr></hr>
          <p className="text-danger">{msg}</p>
          <div className="mb-3">
            <label>Name</label>
            <input
              onChange={
                (e) => setName(e.target.value)
              }
              value={name}
              type="text"
              className="form-control"
              placeholder="Fullname"
              name="firstname"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              onChange={
                (e) => setEmail(e.target.value)
              }
              value={email}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={
                (e) => setPassword(e.target.value)
              }
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              onChange={
                (e) => setConfPass(e.target.value)
              }
              type="password"
              className="form-control"
              placeholder="Enter confirm password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to={'/pages/Login'} >Sign In</Link>
          </p>
        </form>
        </div>
        
      </div>
    );
}
