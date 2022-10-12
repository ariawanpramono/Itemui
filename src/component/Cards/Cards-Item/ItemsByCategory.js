import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import "./ItemsByCategory.css"
import Data from "./ItemsByCategory.json"
import { useLocation } from "react-router-dom";

function ItemsByCategory(props) {
    const location = useLocation();
    const idCategory = location.state;
    const [data, setData] = useState(Data);

    useEffect(() => {
      if (idCategory) {
        const filteredData = Data.filter((item) => {
          return item.category_id === idCategory;
        });
        setData(filteredData);
      }else{
        console.log(Data);
        setData(Data);
      }
    }, [location.state])

    console.log(idCategory);
  
    const image = [
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
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
                    src={image}
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