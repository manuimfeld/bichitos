import React from "react";
import { Carousel } from "react-bootstrap";
import FirstImgCarousel from "../img/3-KG-GRATIS-5.png";
import SecondImgCarousel from "../img/agroquim.png";
import ThreeImgCarousel from "../img/carousel1.png";

const CarouselHome = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstImgCarousel}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SecondImgCarousel}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThreeImgCarousel}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
