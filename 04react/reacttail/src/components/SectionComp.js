import React from "react";

function SectionComp() {
  return (
    <div className="container mx-auto">
      <h1 className="px-4 font-bold mt-5 mb-5 text-2xl">Trending Now</h1>
      <div className="flex flex-wrap px-4 gap-5 sm:gap-0">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <img src="./images/card1.jpg"></img>
          <div className="cardText p-5 bg-gray-100">
            <h3 className="mb-3 font-bold">가장 나다움을 담은 수트</h3>
            <button className="btn bg-white rounded-3xl px-4 py-2 hover:bg-gray-300">
              구매하기
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <img src="./images/card2.jpg"></img>
          <div className="cardText p-5 bg-gray-100">
            <h3 className="mb-3 font-bold">나이키 에어포스 1</h3>
            <button className="btn bg-white rounded-3xl px-4 py-2 hover:bg-gray-300">
              구매하기
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <img src="./images/card3.jpg"></img>
          <div className="cardText p-5 bg-gray-100">
            <h3 className="mb-3 font-bold">르브론의 트레이닝화, TR-1</h3>
            <button className="btn bg-white rounded-3xl px-4 py-2 hover:bg-gray-300">
              구매하기
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <img src="./images/card4.jpg"></img>
          <div className="cardText p-5 bg-gray-100">
            <h3 className="mb-3 font-bold">편안하고 가벼운 착용감</h3>
            <button className="btn bg-white rounded-3xl px-4 py-2 hover:bg-gray-300">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionComp;
