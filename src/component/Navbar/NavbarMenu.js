import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <nav className="navbar navbar-expand-lg mb-2 p-2">
    <div className="container">
    <a className="navbar-brand" href="#">Itemui</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2">
        <li className="nav-item">
              <Link to='/' className="nav-link text">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link text">About</Link>
            </li>
            <li className="text nav-item">
              
              <Link to='/pages/register' className="nav-link text">Register</Link>
            </li>
            <li className="text nav-item">
              <Link to='/pages/login' className="nav-link text">Login</Link>
            </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavbarMenu;
