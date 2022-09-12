import React from "react";
import Cards from "../../component/Cards/Cards";
import Header from "../../component/Header/Header";
import NavbarMenu from "../../component/Navbar/NavbarMenu";
import SearchForm from "../../component/SearchForm/SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../component/Footer/Footer";
import "./home.css";

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
    </main>
  );
};

export default Home;
