// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel_1 from '../../images/carousel-1.png'; // with import
import carousel_2 from '../../images/carousel-2.png'; // with import
import carousel_3 from '../../images/carousel-3.png'; // with import
import carousel_4 from '../../images/carousel-4.png'; // with import
import carousel_5 from '../../images/carousel-5.png'; // with import
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="container_h">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-20" src= {carousel_1} alt="First slide"/>
                  <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-20" src= {carousel_2} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-20" src= {carousel_3} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-20" src= {carousel_4} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Forth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-20" src= {carousel_5} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
