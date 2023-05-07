import axios from "axios";
// import * as store from "../store";
import load from "../store/reduces/spinner";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 10000,
  headers: { Authorization: "Bearer" },
});


export default instance;
