import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Category from "./Category";
import Questions from "./Questions";
import TradeMarks from "./TradeMarks";

const Home = () => {
  const [tradeMarks, setTradeMarks] = useState([]);

  useEffect(() => {
    const endpoint = "http://192.168.0.70:1337/api/marcas?populate=*";
    axios
      .get(endpoint)
      .then((res) => {
        setTradeMarks(res.data.data);
      })
      .catch((err) => {
        setTradeMarks(err);
      });
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
