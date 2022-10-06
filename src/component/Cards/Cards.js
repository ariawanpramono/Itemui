import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Cards.css"
import icon_1 from "../../images/item-1.png"
import icon_2 from "../../images/item-2.png"
import icon_3 from "../../images/item-3.png"
import icon_4 from "../../images/item-4.png"
import icon_5 from "../../images/item-5.png"
import { Link } from "react-router-dom";

function cards() {
  return (
    <div className="container">
      <div className="card-group">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-3 col-6 mt-3 ">
          <Card class="card h-100" >
            <Card.Img
              variant="top"
              src={icon_1}
            />
            <Card.Body>
              <Card.Title>Aksesoris</Card.Title>
              <Link className="btn btn-primary btn-block btn-sm" to={'/detail/aksesoris'}>Detail</Link>
            </Card.Body>
          </Card>
          </div>

          <div className="col-lg-2 col-md-3 col-6 mt-3">
          <Card class="card h-100" >
            <Card.Img
              variant="top"
              src={icon_2}
            />
            <Card.Body>
              <Card.Title>Dokumen</Card.Title>
              <Link className="btn btn-primary btn-block btn-sm" to={'/detail/aksesoris'}>Detail</Link>
            </Card.Body>
          </Card>
          </div>

          <div className="col-lg-2 col-md-3 col-6 mt-3">
          <Card class="card h-100" >
            <Card.Img
              variant="top"
              src={icon_3}
            />
            <Card.Body>
              <Card.Title>Elektronik</Card.Title>
              <Link className="btn btn-primary btn-block btn-sm" to={'/detail/aksesoris'}>Detail</Link>
            </Card.Body>
          </Card>
          </div>

          <div className="col-lg-2 col-md-3 col-6 mt-3">
          <Card class="card h-100" >
            <Card.Img
              variant="top"
              src={icon_4}
            />
            <Card.Body>
              <Card.Title>Kendaraan</Card.Title>
              <Link className="btn btn-primary btn-block btn-sm" to={'/detail/aksesoris'}>Detail</Link>
            </Card.Body>
          </Card>
          </div>

          <div className="col-lg-2 col-md-3 col-6 mt-3">
          <Card class="card h-100" >
            <Card.Img
              variant="top"
              src={icon_5}
            />
            <Card.Body>
              <Card.Title>Lain-Lain</Card.Title>
              <Link className="btn btn-primary btn-block btn-sm" to={'/detail/aksesoris'}>Detail</Link>
            </Card.Body>
          </Card>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default cards;
