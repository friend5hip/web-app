import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initData = {
  val: 10,
  title: "test",
};

const reducer = (state = initData, action) => {
  console.log(state);
  console.log(action);

  if (action.type == "up") {
    return { ...state, val: (state.val += action.payload) };
  } else if (action.type == "down") {
    return { ...state, val: (state.val -= action.payload) };
  }
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>test</div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  // state 값 가져오기
  // const counterVal = useSelector((state) => {
  //   return state.val;
  // });
  const counterVal = useSelector((state) => state.val);
  const titleVal = useSelector((state) => state.title);

  // state 값 변경
  const dispatch = useDispatch();

  return (
    <>
      {counterVal} / {titleVal}
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

export default App;
