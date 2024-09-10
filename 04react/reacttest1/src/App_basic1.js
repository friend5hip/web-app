import React, { useState } from "react";
import "./index.css";

function App() {
  let variable = "variable";
  const [box, setBox] = useState("변경 전");
  let [num, setNum] = useState(0);
  let [isModal, setModal] = useState(false);
  let [shop, setShop] = useState(["Apple", "Banana", "Kiwi"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "gray", fontSize: "20px" }}
      >
        Hello
        <h2>{variable}</h2>
        <p>{box}</p>
        <p>{num}</p>
      </div>
      <header>header</header>
      {/* <img src={logo} alt=""></img> */}
      <button
        onClick={() => {
          // alert("test");
          setBox("변경 후");
        }}
      >
        state 값 변경
      </button>
      <button
        onClick={() => {
          setNum(num++);
        }}
      >
        num
      </button>
      <button
        onClick={() => {
          setModal(!isModal);
        }}
      >
        팝업
      </button>
      {shop.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      {/* 위와 동일한 코드 */}
      {shop.map((item, i) => {
        return (
          <>
            <div key={i}>{item}</div>
          </>
        );
      })}
      {isModal === true ? <Modal title={variable} image="image" /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>공지사항{props.title}</h3>
        <p>상세내용{props.image}</p>
        <p></p>
      </div>
    </>
  );
}

export default App;
