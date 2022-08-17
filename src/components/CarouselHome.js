import React from "react";
import { Carousel } from "react-bootstrap";
import ThreeImgCarousel from "../img/carousel1.png";

const CarouselHome = () => {
  return (
    <Carousel fade>
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
