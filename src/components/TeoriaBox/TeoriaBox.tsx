import React from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { selectdataScructure } from "../../redux/store";
import ArrayTeoria from "../Teorias/ArrayTeoria";
import StackTeoria from "../Teorias/StackTeoria";

const TeoriaBox = ({ teoria }: any) => {
  const state = useSelector(selectdataScructure);

  return (
    <div style={{ width: "80%" }}>
      {/* <div style={{ color: "white", fontSize: "22px", margin: "10px 0px" }}>
        Teoria
      </div> */}
      <div
        style={{
          background: "rgb(52, 58, 70)",
          minHeight: "300px",
          maxHeight: "388px",
          padding: "10px",
          color: "white",
          overflow: "auto",
        }}
      >
        {api[state.algorithm]["teoria"] === "array_teoria" && <ArrayTeoria />}
        {api[state.algorithm]["teoria"] === "stack_teoria" && <StackTeoria />}
      </div>
    </div>
  );
};

export default TeoriaBox;
