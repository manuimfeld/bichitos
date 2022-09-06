import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import apiTradeMarks from "../helpers/apiTradeMarks";
import Category from "./Category";
import Questions from "./Questions";
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
      <Questions />
    </main>
  );
};

export default Home;
