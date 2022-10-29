import axios from "axios";
import React, { Component, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../LoginRegister.css";

export default function Login(){

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('');

  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  const Auth = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login',{
        email: email,
        password: password,
      },{withCredentials:true})
      navigate('/', { state: { log: 1 } })
    } catch (error) {
      console.log(error.response.data.msg)
      setMsg(error.response.data.msg)
    }
  }

  return (
    <div className="container_login container text-start col-md-4 col-9">
      <form onSubmit={Auth}>
        <h3>Sign In</h3>
        <hr></hr>
          <p className="text-danger">{msg}</p>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={
             (e) => setEmail(e.target.value)
            }
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={
              (e) => setPassword(e.target.value)
             }
            value={password}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
