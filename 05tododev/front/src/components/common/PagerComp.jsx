import React from "react";

function PagerComp({ serverData, movePage }) {
  return (
    <div className="flex justify-center items-center mt-4">
      {serverData.prev ? (
        <div
          onClick={() => {
            movePage({ page: serverData.prevPage });
          }}
        >
          {"<"}
        </div>
      ) : null}
      {serverData.pageNumList.map((item, i) => {
        return (
          <div
            className={`m-2 text-center cursor-pointer ${
              serverData.current === item ? "font-bold" : ""
            }`}
            key={i}
            onClick={() => {
              movePage({ page: item });
            }}
          >
            {item}
          </div>
        );
      })}
      {serverData.next ? (
        <div
          onClick={() => {
            movePage({ page: serverData.nextPage });
          }}
        >
          {">"}
        </div>
      ) : null}
    </div>
  );
}

export default PagerComp;
