import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import "./ItemsByCategory.css"
import Data from "./ItemsByCategory.json"
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie"

function ItemsByCategory() {
    const location = useLocation();
    const stateValue = location.state
    const idCategory = stateValue.idCategory;
    const searchKey = stateValue.searchKey;

    const [decoded, setDecoded] = useState(null)
    const [item, setItem] = useState([]);
    const [fullItem, setFullItem] = useState([]);

    const getItems = async() => {
      const response = await axios.get("http://localhost:5000/items");
      setItem(response.data);
      setFullItem(response.data)
    }

    useEffect(() => {
      if (searchKey) {
        const filteredData = fullItem.filter(item=>item.nama.toLowerCase().includes(searchKey));
        setItem(filteredData);
      }else{
        console.log(fullItem);
        if (idCategory !== 0) {
          const filteredData = fullItem.filter((item) => {
            return item.category_id === idCategory;
          });
          setItem(filteredData);
        }else{
          setItem(fullItem);
        }
      }
    }, [location.state])

    useEffect(()=>{
      getItems();
      if (Cookies.get('token') != null) {
        setDecoded(jwtDecode(Cookies.get('token')))
      }
    }, []);

    

    const image = [
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
    ];

    return (
      <div className="container-fluid">
        <div className="container">
        
        <div className="row">

          {
            item.map(item => {
            return(
                <div key={item.id} className="col-lg-3 col-md-4 col-6 mt-3">
                {/* {item.image} */}

                <Card className="card h-100 item-card">
                  <Card.Img
                    className="item-card"
                    variant="top"
                    src={item.url}
                  />
                  <Card.Body>
                    <div className="judul-barang"></div>
                    <Card.Title className="text-left">{item.name}</Card.Title>
                  </Card.Body>
                  {(decoded != null) ? (
                    <div className="card-body">
                    <div className="">
                    <Link className="btn btn-primary" to={`/edititem/${item.id}`}>Detail</Link>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </div>
                  </div>
                  ):(
                    <div className="card-body">
                      <Link className="btn btn-primary" to={`/edititem/${item.id}`}>Detail</Link>
                    </div>
                  )
                  
                  }
                  
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