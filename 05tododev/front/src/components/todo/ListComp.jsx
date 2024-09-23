import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { getList } from "../../api/todoAPI";
import useCustomMove from "../../hooks/useCustomMove";
import PagerComp from "../common/PagerComp";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function ListComp() {
  const { page, size, refresh, moveToRead, moveToList, moveToWrite } =
    useCustomMove();
  const [data, setData] = useState(initState);

  //   const [queryParams] = useSearchParams();
  //   console.log(queryParams.get("size"));
  //   const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  //   const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [page, size, refresh]);

  return (
    <div>
      {data.dtoList.map((item, i) => {
        return (
          <div
            key={i}
            className="flex border-b-2 py-1 mx-auto"
            onClick={() => {
              moveToRead(item.tno);
            }}
          >
            <div className="w-1/12">{item.tno}</div>
            <div className="w-7/12 font-semibold cursor-pointer">
              {item.title}
            </div>
            <div className="w-4/12">{item.dueDate}</div>
          </div>
        );
      })}
      <div className="flex justify-end mt-4">
        <button
          className="p-2 rounded bg-blue-300 text-white"
          onClick={() => {
            moveToWrite();
          }}
        >
          글쓰기
        </button>
      </div>
      <PagerComp serverData={data} movePage={moveToList} />
    </div>
  );
}

export default ListComp;
