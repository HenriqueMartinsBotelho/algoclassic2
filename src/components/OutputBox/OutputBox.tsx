import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { selectdataScructure } from "../../redux/store";

const OutputBox = () => {
  const dataState = useSelector(selectdataScructure);
  const code = api[dataState.algorithm][dataState.selectedOption];
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
      aa
      {/* {output} */}
    </div>
  );
};

export default OutputBox;
