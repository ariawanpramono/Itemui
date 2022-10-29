import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import NavbarMenu from "./component/Navbar/NavbarMenu";
import Footer from "./component/Footer/Footer";
import './App.css';
import ListItems from "./pages/Item/ListItems";
import { UserContext } from "./UserContext";
import AddItem from "./pages/Item/AddItem";
import EditItem from "./pages/Item/EditItem";

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <main className="app">
      <UserContext.Provider value={{user, setUser}}>
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='detail/itemsbycategory' element={<ListItems/>}/>
        <Route path='additem' element={<AddItem/>}/>
        <Route path='edititem/:id' element={<EditItem/>}/>
        <Route path='pages/Register' element={<Register/>}/>
        <Route path='pages/Login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer />
      </UserContext.Provider>
      
    </main>
  );
};

export default App;
