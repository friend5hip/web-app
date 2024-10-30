import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const REST_API_KEY = "1e06d291e4149fbebab01d2b56a28306";
const REDIRECT_URI = "http://localhost:5173/member/kakao";
const AUTH_CODE_PATH = "https://kauth.kakao.com/oauth/authorize";
const ACCESS_TOKEN_URL = "https://kauth.kakao.com/oauth/token";

export const getKakaoLoginLink = () => {
  const kakaoURL = `${AUTH_CODE_PATH}?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return kakaoURL;
};

export const getAccessToken = async (authCode) => {
  const header = {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
  const params = {
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: authCode,
  };

  const res = await axios.post(ACCESS_TOKEN_URL, params, header);
  const accessToken = res.data.access_token;
  return accessToken;
};

export const getMemberWithAccessToken = async (accessToken) => {
  const res = await axios.get(
    `${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`
  );
  return res.data;
};
