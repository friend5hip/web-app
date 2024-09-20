import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initData = {
  cart: [],
};

// reducer로 state값 변경 로직을 관리
const reducer = (state = initData, action) => {
  console.log(action);

  switch (action.type) {
    case "add_cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "remove_cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    // Provider 컴포넌트의 내부 컴포넌트끼리 store를 공유
    <Provider store={store}>
      <div>상점</div>
      <hr />
      <ProductList products={products} />
      <hr />
      <Cart />
    </Provider>
  );
}

const products = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
  { id: 4, name: "product4" },
];

function ProductList({ products }) {
  // dispatch로 action을 store로 전달
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch({ type: "add_cart", payload: item });
  };

  return (
    <>
      <h3>상품 목록</h3>
      {products.map((item) => {
        return (
          <div key={item.id}>
            {item.id} / {item.name}
            <button onClick={() => addCart(item)}>장바구니에 추가</button>
          </div>
        );
      })}
    </>
  );
}

function Cart() {
  //
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCart = (item) => {
    dispatch({ type: "remove_cart", payload: item });
  };

  return (
    <>
      <div>장바구니</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.id} / {item.name}
          <button
            onClick={() => {
              removeCart(item.id);
            }}
          >
            장바구니 제거
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
