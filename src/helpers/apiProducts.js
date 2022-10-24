import axios from "axios";

const qs = require("qs");

const apiProducts = (setProducts, filters = {}) => {
  const endpoint = `http://192.168.0.70:1337/api/productos?${qs.stringify(
    filters
  )}populate=*`;
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
