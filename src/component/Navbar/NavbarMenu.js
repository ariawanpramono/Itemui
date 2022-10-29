import "./Navbar.css";
import { Routes, Route ,Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie"

function NavbarMenu() {

  const [name, setName] = useState();
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    refreshToken();
  },[]);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token',{withCredentials:true});
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      Cookies.set('token', response.data.accessToken)
      setName(decoded.name);
      setExpire(decoded.exp)
    } catch (error) {
      navigate('/')
    }
  }

  const logoutHandler = async () => {
    try {
      await axios.delete('http://localhost:5000/logout', {withCredentials:true});
      Cookies.remove('token');
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg mb-2 p-2">
    <div className="container">
    <a className="navbar-brand">
      Itemui
    </a>
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

            {(name != null) ? (
              <>
                <li className="text nav-item">
                  <Link to='/additem' className="nav-link text">Upload Barang</Link>
                </li>
                <li className="text nav-item">
                  <Link to='#' onClick={logoutHandler} className="nav-link text">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text nav-item">
                  <Link to='/pages/register' className="nav-link text">Register</Link>
                </li>
                <li className="text nav-item">
                  <Link to='/pages/login' className="nav-link text">Login</Link>
                </li>
              </> 
            )}

      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavbarMenu;
