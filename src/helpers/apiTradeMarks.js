import axios from "axios";

const apiTradeMarks = (setTradeMarks) => {
  const endpoint = "http://192.168.0.70:1337/api/marcas?populate=*";
  axios
    .get(endpoint)
    .then((res) => {
      return setTradeMarks(res.data.data);
    })
    .catch((err) => {
      return console.log(err);
    });
};

export default apiTradeMarks;
