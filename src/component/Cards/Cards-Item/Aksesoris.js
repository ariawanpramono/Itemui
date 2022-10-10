import Card from "react-bootstrap/Card";
import React from "react";
import icon_1 from "../../../images/item-1.png"
import "./Aksesoris.css"
import Data from "./Aksesoris.json"

function CardAksesoris() {
    const image = [
        "https://www.frankncojewellery.com/id/articles/whats-new/rekomendasi-kalung-emas-wanita-asli-model-terbaru", "asdasd"
    ]

    return (
      <div className="container-fluid">
        <div className="container">
        
        <div className="row">

          {
            Data.map(data => {
            return(
 
                <div className="col-lg-2 col-md-3 col-6 mt-3">
                <Card class="card h-100 ">
                  <Card.Img
                    variant="top"
                    src={icon_1}
                  />
                  <Card.Body >
                    <div className="judul-barang"></div>
                    <Card.Title className="text-left">{data.nama}</Card.Title>
                    <Card.Text className="text-left">{data.keterangan}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })
          }

          </div>
          
        </div>
      </div>
    );
  }
  
  export default CardAksesoris;