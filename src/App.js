import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import NavbarMenu from "./component/Navbar/NavbarMenu";
import Footer from "./component/Footer/Footer";
import './App.css';

const App = () => {
  return (
    <main className="app">
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='pages/Register' element={<Register/>}/>
        <Route path='pages/Login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer />
    </main>

  );
};

export default App;
