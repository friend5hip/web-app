import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 15; // 한 페이지에 표시할 항목 수
  const pagerCnt = 5; // 페이지 번호를 한 번에 보여줄 수
  const [data, setData] = useState([]); // 현재 페이지의 데이터
  const [totalpage, setTotalpage] = useState(1); // 전체 페이지 수
  const [currentpage, setCurrentpage] = useState(1); // 현재 페이지 번호

  const api = (page) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${listCnt}`
      )
      .then((res) => {
        setData(res.data);
        const totalItems = res.headers["x-total-count"]; // 전체 데이터 개수
        setTotalpage(Math.ceil(totalItems / listCnt)); // 전체 페이지 수 계산
      });
  };

  useEffect(() => {
    api(currentpage); // 처음 마운트될 때 현재 페이지 데이터 가져오기
  }, [currentpage]); // currentpage가 바뀔 때마다 API 호출

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = Math.min(startPage + pagerCnt - 1, totalpage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => setCurrentpage(i)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black",
          }}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <div>totalPage: {totalpage}</div>
      {data.map((item, i) => (
        <div key={i}>
          {item.id}. {item.title}
        </div>
      ))}

      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
      <div>
        {currentpage > 1 && (
          <button onClick={() => setCurrentpage(currentpage - 1)}>이전</button>
        )}

        {currentpage < totalpage && (
          <button onClick={() => setCurrentpage(currentpage + 1)}>다음</button>
        )}
      </div>
    </div>
  );
}

export default App;
