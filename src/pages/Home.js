import React from "react";
import Ofertas from "../components/Ofertas";
import CarouselHome from "../components/CarouselHome";
import Category from "../components/Category";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <>
      <main>
        <section className="main">
          <CarouselHome />
          <Ofertas />
        </section>
        <section className="category">
          <Category />
        </section>
        <section className="steps">
          <Steps />
        </section>
      </main>
      {/*
      
        
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.3353776049594!2d-58.61801238519654!3d-34.570379563240955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9640d54298b%3A0xafa13012b4a7e717!2sPres.%20Juan%20Domingo%20Per%C3%B3n%209699%2C%20B1689AFB%20Remedios%20de%20Escalada%20de%20San%20Martin%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1658790106473!5m2!1ses-419!2sar"></iframe> */}
    </>
  );
};

export default Home;
