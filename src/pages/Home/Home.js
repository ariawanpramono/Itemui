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
import Aksesoris from "../Item/Aksesoris";

const Home = () => {
  return (
    <main className="home">
     
      <Header />
      <br />
      <SearchForm />
      <br /> 
      <Cards/>

    </main>

  );
};

export default Home;
