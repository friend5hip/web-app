import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  // onMounted 전에 load, 값이 변경되면 컴포넌트 re-load
  useEffect(() => {
    console.log("Hello");
  }, []); // dependency 없으면 밑의 useEffect 사용 시 re-load, dependency([]) 추가로 한 번만 mount 혹은 상태 변화마다 mount 여부 설정 가능

  useEffect(() => {
    console.log("World");
  }, [count]); // count 값이 변경되면 모든 useEffect 함수 mount

  return (
    <div>
      {num} / {count}
      <br></br>
      <button
        onClick={() => {
          setNum(num + 1); // num++ compile error
        }}
      >
        setNum
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        setCount
      </button>
    </div>
  );
}

export default App;
