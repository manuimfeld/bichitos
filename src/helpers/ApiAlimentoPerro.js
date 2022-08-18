import axios from "axios";

const ApiCallPerro = (setState, raza) => {
  const endpoint = `http://167.172.132.11:1337/api/alimentos?filters[Raza][$eq]=Perro: ${raza}`;
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
