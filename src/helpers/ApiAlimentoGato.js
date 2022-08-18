import axios from "axios";

const ApiCall = (setState, raza) => {
  const endpoint = `http://167.172.132.11:1337/api/alimentos?filters[Raza][$eq]=Gato: ${raza}`;
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
