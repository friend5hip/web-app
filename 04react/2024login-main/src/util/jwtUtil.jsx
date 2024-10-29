import axios from "axios";
import { getCookie } from "./cookieUtil";

const jwtAxios = axios.create();

const beforeReq = (config) => {
  console.log("beforeReq......");

  const memberInfo = getCookie("member");

  if (!memberInfo) {
    return Promise.reject({ response: { data: { error: "Login Required." } } });
  }

  const { accessToken } = memberInfo;

  config.headers.Authorization = `Bearer ${accessToken}`;
};

const requestFail = (error) => {
  console.log("requestFail......");
  return Promise.reject(error);
};

const beforeRes = (res) => {
  console.log("beforeRes......");
  console.log(res);
};

const responseFail = () => {
  console.log("responseFail......");
  return Promise.reject(error);
};

jwtAxios.interceptors.request(beforeReq, requestFail);
jwtAxios.interceptors.response(beforeRes, responseFail);

export default jwtAxios;
