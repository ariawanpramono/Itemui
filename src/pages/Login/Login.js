import React, { Component, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "../LoginRegister.css";

export default function Login(){

  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      username: "tes",
      email: "rifqides12@gmail.com",
      password: "123"
    }
  ]

  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const submitHandler = e => {
    e.preventDefault();
    const checkUser = data.filter((user) => {
      return user.email === details.email && user.password == details.password;
    });
    if (checkUser) {
      const dataUserLog = checkUser[0];
      setUser(dataUserLog);
      navigate('/');
    }
    console.log(user);
  }

  return (
    <div className="container_login container text-start col-md-4 col-9">
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={
              e => setDetails({...details, email: e.target.value})
            }
            value={details.email}
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
              e => setDetails({...details, password: e.target.value})
            }
            value={details.password}
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
