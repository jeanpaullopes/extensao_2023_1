
import axios from "axios";

const apiReceitas = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-type": "application/json",
  },
});

export default apiReceitas;
