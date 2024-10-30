import React from "react";
import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";

const link = getKakaoLoginLink();

function KakaoLoginComp() {
  return (
    <div>
      <div className="w-full text-center bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 mt-4">
        <Link to={link}>Kakao Log In</Link>
      </div>
    </div>
  );
}

export default KakaoLoginComp;
