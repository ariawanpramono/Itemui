import React, {Component} from "react"
import CardAksesoris from "../../component/Cards/Cards-Item/Aksesoris";
import SearchForm from "../../component/SearchForm/SearchForm";
import "./style.css";
import { Link } from "react-router-dom";

function Aksesoris(){
    return(
        <div className="body">
            
            <br/>
            <div className="row">
                <div className="col-10 ms-auto">
                    <SearchForm/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-2 ms-3 mt-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-uppercase fw-bold">Category</li>
                        <li class="list-group-item">
                            <Link className="aksesoris" to={'/detail/aksesoris'}>Aksesoris</Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="aksesoris" to={'/detail/aksesoris'}>Dokumen</Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="aksesoris" to={'/detail/aksesoris'}>Elektronik</Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="aksesoris" to={'/detail/aksesoris'}>Kendaraan</Link>
                        </li>
                        <li class="list-group-item">
                            <Link className="aksesoris" to={'/detail/aksesoris'}>Semua</Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div className="col ms-auto">
                    <CardAksesoris/>
                </div>
            </div>
        </div>
    )
}

export default Aksesoris;