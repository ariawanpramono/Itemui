import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Cards.css"
import icon_1 from "../../images/item-1.png"
import icon_2 from "../../images/item-2.png"
import icon_3 from "../../images/item-3.png"
import icon_4 from "../../images/item-4.png"
import icon_5 from "../../images/item-5.png"

function cards() {
  return (
    <div className="container_">
      <div className="card-group">

        <div className="row" style={{ marginRight: "25px" }}>
          <Card class="card col-md-5" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={icon_1}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Text</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="row" style={{ marginRight: "25px" }}>
          <Card class="card col-md-5" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={icon_2}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Text</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="row" style={{ marginRight: "25px" }}>
          <Card class="card col-md-5" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={icon_3}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Text</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="row" style={{ marginRight: "25px" }}>
          <Card class="card col-md-5" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={icon_4}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Text</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="row">
          <Card class="card col-md-5" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={icon_5}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Text</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </div>
  );
}

export default cards;
