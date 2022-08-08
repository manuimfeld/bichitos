import axios from "axios";

const ApiCall = (setState, raza) => {
  const endpoint = `https://bichitos.herokuapp.com/api/alimentos?filters[Raza][$eq]=Gato: ${raza}`;
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

export default ApiCall;
