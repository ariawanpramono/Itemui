import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import NavbarMenu from "./component/Navbar/NavbarMenu";
import Footer from "./component/Footer/Footer";
import './App.css';
import Aksesoris from "./pages/Item/Aksesoris";

const App = () => {

  return (
    <main className="app">
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='detail/aksesoris' element={<Aksesoris/>}/>
        <Route path='pages/Register' element={<Register/>}/>
        <Route path='pages/Login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      {/* <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-m-6">

              <div className="card">
                <div className="card-header">Belajar Submit</div>
                <div className="card-body">
                  <form>

                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">Firstname</label>
                      <input type="text" name="firstname" id="firstname" className="form-control"/>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">Lastname</label>
                      <input type="text" name="lastname" id="lastname" className="form-control"/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Show</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
      <Footer />
    </main>

  );
};

export default App;
