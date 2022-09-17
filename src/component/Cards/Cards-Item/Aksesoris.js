import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import icon_1 from "../../../images/item-1.png"
import { Link } from "react-router-dom";

function CardAksesoris() {
    const image = [
        "https://www.frankncojewellery.com/id/articles/whats-new/rekomendasi-kalung-emas-wanita-asli-model-terbaru", "asdasd"
    ]

    return (
      <div className="container-fluid">
        <div className="container">
  
          <div className="row">

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src="https://cf.shopee.co.id/file/bae64ecaaa0c16442366e4da4278c1c6"
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-11474781/no_brand_dompet_wanita_panjang_full02.jpg"
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src={icon_1}
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src={icon_1}
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src={icon_1}
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src={icon_1}
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

            <div className="col-lg-3 col-md-3 col-6 mt-3">
            <Card class="card h-100 ">
              <Card.Img
                variant="top"
                src={icon_1}
              />
              <Card.Body >
                <Card.Title className="text-left">Nama Barang</Card.Title>
                <Card.Text>Keterangan Barang</Card.Text>
              </Card.Body>
            </Card>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
  
  export default CardAksesoris;