import React from "react";

const TeoriaBox = ({ teoria }: any) => {
  return (
    <div style={{ width: "60%" }}>
      <div style={{ color: "white", fontSize: "22px", margin: "10px 0px" }}>
        Teoria
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
        {teoria}
      </div>
    </div>
  );
};

export default TeoriaBox;
