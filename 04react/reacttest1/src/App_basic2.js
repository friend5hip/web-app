import React, { useState } from "react";

function App() {
  const [pro, setPro] = useState(["사과", "바나나", "참외"]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("제목");
  const [input, setInput] = useState("");
  return (
    <>
      <div>{title}</div>
      {pro.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setModal(true);
              setTitle(i);
            }}
          >
            {item}
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          let copy = [...pro, input];
          copy.unshift(input); // 맨 앞 인덱스에 push
          setPro(copy);
          setInput(" ");
        }}
      >
        과일 넣기
      </button>
      <p>input: {input}</p>
      {modal === true ? <Modal pro={pro} title={title} /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <div className="modalWrap">
      <div className="modalData">
        <h3>{props.pro[props.title]}</h3>
        <p>상세</p>
      </div>
    </div>
  );
}

export default App;
