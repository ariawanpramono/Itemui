import React, {Component} from "react"
import ItemsByCategory from "../../component/Cards/Cards-Item/ItemsByCategory";
import SearchForm from "../../component/SearchForm/SearchForm";
import "./style.css";
import { Link } from "react-router-dom";

function ListItems(){
    const idCategory = {
        semua:0,
        aksesoris:1,
        dokumen:2,
        elektronik:3,
        kendaraan:4,
        lain_lain:5
      };


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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-uppercase fw-bold">Category</li>
                        <li className="list-group-item">
                            <Link state={{
                idCategory: idCategory.semua
              }} className="link" to={'/detail/itemsbycategory'}>Semua</Link>
                        </li>
                        <li className="list-group-item">
                            <Link state={{
                            idCategory: idCategory.aksesoris
                            }} className="link" to={'/detail/itemsbycategory'}>Aksesoris</Link>
                        </li>
                        <li className="list-group-item">
                            <Link state={{
                            idCategory: idCategory.dokumen
                            }} className="link" to={'/detail/itemsbycategory'}>Dokumen</Link>
                        </li>
                        <li className="list-group-item">
                            <Link state={{
                            idCategory: idCategory.elektronik
                            }} className="link" to={'/detail/itemsbycategory'}>Elektronik</Link>
                        </li>
                        <li className="list-group-item">
                            <Link state={{
                            idCategory: idCategory.kendaraan
                            }} className="link" to={'/detail/itemsbycategory'}>Kendaraan</Link>
                        </li>
                        <li className="list-group-item">
                            <Link state={{
                            idCategory: idCategory.lain_lain
                            }} className="link" to={'/detail/itemsbycategory'}>Lain-lain</Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div className="col ms-auto">
                    <ItemsByCategory/>
                </div>
            </div>
        </div>
    )
}

export default ListItems;