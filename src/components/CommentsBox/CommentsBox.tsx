import React from "react";

const CommentsBox = () => {
  return (
    <div style={{ width: "40%" }}>
      <div style={{ color: "white", fontSize: "22px", margin: "10px 0px" }}>
        Comentários
      </div>
      <div
        style={{
          background: "rgb(52, 58, 70)",
          minHeight: "300px",
          padding: "10px",
          marginBottom: "100px",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Em breve...
      </div>
    </div>
  );
};

export default CommentsBox;
