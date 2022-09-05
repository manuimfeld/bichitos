import React from "react";
import Category from "./Category";
import Questions from "./Questions";
import TradeMarks from "./TradeMarks";

const Home = () => {
  return (
    <main>
      <div className="carousel"></div>
      <TradeMarks />
      <Category />
      <Questions />
    </main>
  );
};

export default Home;
