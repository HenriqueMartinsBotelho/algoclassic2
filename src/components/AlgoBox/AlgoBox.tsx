import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import { addActiveButton } from "../../redux/btnSlice";
import { selectBtn, selectdataScructure } from "../../redux/store";
import CodeBox from "../CodeBox";
import OutputBox from "../OutputBox/OutputBox";
import Button from "./Button";

const AlgoBox = ({ handleDataStructure }: any) => {
  const btnState = useSelector(selectBtn);
  // const dispatch = useDispatch();
  const dataState = useSelector(selectdataScructure);
  const code = api[dataState.algorithm][dataState.selectedOption];

  // const handleClick = (op) => {
  //   handleOption(op);
  //   dispatch(addActiveButton(op));
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // width: "50%",
        height: "100%",
        // width: "30vw",
        // height: "40vh",
        background: "rgb(52, 58, 70)",
        borderRadius: "10px",
        padding: "2px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   marginBottom: "8px",
            //   color: "white",
            //   fontSize: "20px",
            // }}
            className="flex justify-center text-cyan-50"
          >
            <div className="text-lg font-bold">
              {dataState.algorithm.toUpperCase()}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              width: "100%",
              color: "white",
            }}
          >
            <div style={{ display: "flex", fontSize: "18px", gap: "12px" }}>
              <Button
                active={btnState.acessar}
                onClick={() =>
                  handleDataStructure(dataState.algorithm, "acessar")
                }
              >
                Acessar
              </Button>
              <Button
                active={btnState.buscar}
                onClick={() =>
                  handleDataStructure(dataState.algorithm, "buscar")
                }
              >
                Buscar
              </Button>
              <Button
                active={btnState.inserir}
                onClick={() =>
                  handleDataStructure(dataState.algorithm, "inserir")
                }
              >
                Inserir
              </Button>
              <Button
                active={btnState.deletar}
                onClick={() =>
                  handleDataStructure(dataState.algorithm, "deletar")
                }
              >
                Deletar
              </Button>
            </div>
            <div style={{ color: "green", fontWeight: "bold" }}>🌳</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8px",
          background: "rgb(52, 58, 70)",
        }}
      >
        <div style={{ display: "flex", width: "50%", height: "100%" }}>
          <CodeBox
            code={code}
            style={{
              display: "flex",
              height: "100%",
              // border: "1px solid blue",
              width: "100%",
            }}
            minWidth="100%"
          />
        </div>
        <OutputBox />
      </div>
    </div>
  );
};

export default AlgoBox;
