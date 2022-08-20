import axios from "axios";

const ApiCallPerro = (setState, raza) => {
  const endpoint = `https://bichitos.herokuapp.com/api/alimentos?filters[Raza][$eq]=Perro: ${raza}`;
  axios
    .get(endpoint)
    .then((res) => {
      console.log(res.data.data);
      const data = res.data.data;
      setState(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default ApiCallPerro;
