import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const api = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        console.log(res.data);

        setData(res.data);
        console.log("total data: " + res.data.length);

        setTotalPage(res.data.length / listCnt);
        console.log("total page: " + res.data.length / listCnt);
      });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentPage - 1) / pagerCnt) * listCnt + 1);
    const endPage = startPage + pagerCnt - 1;

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            alert(i);
          }}
        >
          {i}
        </span>
      );
      <br></br>;
    }
    return pageNumbers;
  };

  return (
    <div>
      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
      Total Page: {totalPage}
      {data?.map((item, i) => {
        return (
          <div key={i}>
            {item.userId}. {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
