import { Cookies } from "react-cookie";

const cookies = new Cookies();

// value에는 accessToken, refreshToken를 담고 days에 만료기간을 설정한다.
export const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days);

  return cookies.set(name, value, { expires: expires, path: "/" });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

// path마다 쿠키 존재
export const removeCookie = (name, path = "/") => {
  return cookies.remove(name, { path: path });
};
