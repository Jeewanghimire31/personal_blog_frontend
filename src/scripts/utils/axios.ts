import axios from "axios";

console.log(axios);
console.log("hello");
const Axios = axios.create({
  baseURL: "http://localhost:4000",
});

export default Axios;
