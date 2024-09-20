import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter.jsX";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>test</div>
      <Counter />
    </Provider>
  );
}

export default App;
