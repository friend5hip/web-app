import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./todoApi";

const host = API_SERVER_HOST;

const getTest = () => {
  const res = jwtAxios.get(`${host}`);
  return res.data;
};
