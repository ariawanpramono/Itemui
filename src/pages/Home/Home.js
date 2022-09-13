import React from "react";
import Cards from "../../component/Cards/Cards";
import Header from "../../component/Header/Header";
import NavbarMenu from "../../component/Navbar/NavbarMenu";
import SearchForm from "../../component/SearchForm/SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../component/Footer/Footer";
import "./home.css";
import { Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";

const Home = () => {
  return (
    <main>
      <NavbarMenu />
      <br />
      <Header />
      <br />
      <SearchForm />
      <br /> 
      <Cards />
      <br />
      <Footer />

      <Routes>
        <Route path='pages/Register' element={<Register/>}/>
        <Route path='pages/Login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      
    </main>

  );
};

export default Home;
