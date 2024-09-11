import React from "react";

function VisualComp() {
  return (
    <div className="visual">
      <div className="container flex mx-auto h-auto md:h-96 text-white px-4 items-center text-center md:text-left">
        <div>
          <p className="mb-3">나이키 페가수스 41</p>
          <h1 className="text-4xl mb-3 font-bold">에너지를 낭비하지 마세요.</h1>
          <div className="px-4 py-2 bg-white rounded-3xl hover:bg-gray-300 inline-block text-black">
            구매하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualComp;
