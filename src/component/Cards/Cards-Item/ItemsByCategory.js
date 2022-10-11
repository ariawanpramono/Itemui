import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import icon_1 from "../../../images/item-1.png"
import "./ItemsByCategory.css"
import Data from "./ItemsByCategory.json"
import { useLocation } from "react-router-dom";

function ItemsByCategory(props) {
    const location = useLocation();
    const [data, setData] = useState(Data);

    const idCategory = location.state;

    useEffect(() => {
      const filteredData = data.filter((item) => {
        return item.category_id === idCategory;
      });
      setData(filteredData);
    }, [])
  
    const image = [
        "https://www.frankncojewellery.com/id/articles/whats-new/rekomendasi-kalung-emas-wanita-asli-model-terbaru", "asdasd"
    ];

    return (
      <div className="container-fluid">
        <div className="container">
        
        <div className="row">

          {
            data.map(data => {
            return(
 
                <div className="col-lg-2 col-md-3 col-6 mt-3">
                <Card className="card h-100 ">
                  <Card.Img
                    variant="top"
                    src={icon_1}
                  />
                  <Card.Body>
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
  
  export default ItemsByCategory;