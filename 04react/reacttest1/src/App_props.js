import React, { useState } from "react";

function App() {
  const [data, setData] = useState("Test");

  function dataChange() {
    setData("1");
  }

  function dataChange1() {
    setData("2");
  }

  return (
    <div style={{ background: "pink", padding: "10px" }}>
      App
      <SubComp1 data={data} dataModi1={dataChange} sDataModi2={dataChange1} />
    </div>
  );
}

function SubComp1(props) {
  return (
    <>
      <div style={{ background: "skyblue", padding: "10px" }}>
        <h3>SubComp1</h3>
        <p>{props.data}</p>
        <button onClick={props.dataModi1}>변경1</button>
        <SubComp2 sData={props.data} dataModi2={props.sDataModi2} />
      </div>
    </>
  );
}

function SubComp2(props) {
  return (
    <>
      <div style={{ background: "green" }}>
        <h3>SubComp2</h3>
        <p>{props.sData}</p>
        <button onClick={props.dataModi2}>변경2</button>
      </div>
    </>
  );
}

export default App;
