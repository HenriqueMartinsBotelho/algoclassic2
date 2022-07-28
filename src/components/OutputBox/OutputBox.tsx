import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { selectdataScructure } from "../../redux/store";

const OutputBox = () => {
  const dataState = useSelector(selectdataScructure);
  const ans = api[dataState.algorithm]["resposta"];

  // showCode();
  // const output = eval(code);
  // console.log(output);
  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        background: "rgb(85, 92, 107)",
        // borderLeft: "1px solid whitesmoke",
        color: "white",
        padding: "0px 6px",
        marginLeft: "10px",
        width: "50%",
      }}
    >
      {dataState.selectedOption === "acessar" && ans[0]}
      {dataState.selectedOption === "buscar" && ans[1]}
      {dataState.selectedOption === "inserir" && ans[2]}
      {dataState.selectedOption === "deletar" && ans[3]}
    </div>
  );
};

export default OutputBox;
