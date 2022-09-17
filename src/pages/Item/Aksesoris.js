import React, {Component} from "react"
import CardAksesoris from "../../component/Cards/Cards-Item/Aksesoris";
import Header from "../../component/Header/Header";
import SearchForm from "../../component/SearchForm/SearchForm";
import "./style.css";

function Aksesoris(){
    return(
        <div className="body">
            <Header/>
            <br/>
            <SearchForm/>
            <br/>
            <CardAksesoris/>
        </div>
    )
}

export default Aksesoris;