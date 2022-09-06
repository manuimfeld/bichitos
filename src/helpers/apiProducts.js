import axios from "axios";

const apiProducts = (setProducts) => {
  const endpoint = "http://192.168.0.70:1337/api/productos?populate=*";
  axios
    .get(endpoint)
    .then((res) => {
      return setProducts(res.data.data);
    })
    .catch((err) => {
      return setProducts(err);
    });
};

export default apiProducts;
