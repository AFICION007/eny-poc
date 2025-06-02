import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const API_HOST = import.meta.env.VITE_API_HOST;

const axiosInstance = axios.create({
  baseURL: API_HOST,
  headers: {},
});

const useAxios = makeUseAxios({
  axios: axiosInstance,
});

export default useAxios;
