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
        <section className="steps">
          <Steps />
        </section>
        <section className="category">
          <Category />
        </section>
      </main>
    </>
  );
};

export default Home;
