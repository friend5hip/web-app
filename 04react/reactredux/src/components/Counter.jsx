import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counterVal = useSelector((state) => state.val);
  const textVal = useSelector((state) => state.text);

  const dispatch = useDispatch();

  return (
    <>
      {counterVal} / {textVal}
      <br></br>
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 });
        }}
      >
        업
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default Counter;
