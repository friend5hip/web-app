import React from "react";

function ImageList({ imgData }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, margin: "20px" }}>
      <div></div>
      {imgData.length > 0 ? (
        imgData.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={`${process.env.REACT_APP_DEV_HOST}/file/${item.id}`}
                style={{ width: "200px" }}
              />
            </div>
          );
        })
      ) : (
        <p>No image</p>
      )}
    </div>
  );
}

export default ImageList;
