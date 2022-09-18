import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar className="background" expand="lg">
      <Container className="navbar">
        <Navbar.Brand href="/">
          iTemui
        </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <ul className="navbar-nav">
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
