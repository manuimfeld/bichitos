import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import apiTradeMarks from "../helpers/apiTradeMarks";
import Category from "./Category";
import TradeMarks from "./TradeMarks";

const Home = () => {
  const [tradeMarks, setTradeMarks] = useState([]);

  useEffect(() => {
    apiTradeMarks(setTradeMarks);
  }, []);

  return (
    <main>
      <div className="carousel"></div>
      <TradeMarks tradeMarks={tradeMarks} />
      <Category />
    </main>
  );
};

export default Home;
