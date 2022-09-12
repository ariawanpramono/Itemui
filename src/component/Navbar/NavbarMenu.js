import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavbarMenu() {
  return (
    <Navbar className="background" expand="lg">
      <Container className="navbar">
        <Navbar.Brand href="#home">iTemui</Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link text" href="/">
                Home<span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text" href="/">
                About<span className="sr-only"></span>
              </a>
            </li>
            <li className="text nav-item">
              <a className="nav-link text" href="../../pages/Register/Register.js">
                Register<span className="sr-only"></span>
              </a>
            </li>
            <li className="text nav-item">
              <a className="nav-link text" href="../../pages/Login/Login.js">
                Login<span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
