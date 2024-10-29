import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterStore1 = createSlice({
  name: "counter1",
  initialState: {
    num: 0,
  },
  reducers: {
    up: (state, action) => {
      console.log("counter1");
      state.num = action.payload + state.num;
    },
  },
});

const counterStore2 = createSlice({
  name: "counter2",
  initialState: {
    num1: 0,
  },
  reducers: {
    up: (state, action) => {
      console.log("counter2");
      state.num1 = action.payload + state.num1;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterStore1.reducer,
    counter1: counterStore2.reducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <div>Hello world !</div>
        <Child></Child>
      </div>
    </Provider>
  );
}

function Child() {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.counter.num;
  });
  const num1 = useSelector((state) => {
    return state.counter1.num1;
  });

  return (
    <div>
      Child1: {num}, {num1}
      <br />
      <button
        onClick={() => {
          dispatch(counterStore1.actions.up(1));
        }}
      >
        UP1
      </button>
      <button
        onClick={() => {
          dispatch(counterStore2.actions.up(2));
        }}
      >
        UP2
      </button>
    </div>
  );
}

export default App;
