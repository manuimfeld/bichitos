import axios from "axios";

const apiProducts = (setProducts, query = "") => {
  const endpoint = `http://192.168.0.70:1337/api/productos?${query}populate=*`;
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
