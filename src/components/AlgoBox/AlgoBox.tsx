import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import { addActiveButton } from "../../redux/btnSlice";
import { selectBtn, selectdataScructure } from "../../redux/store";
import CodeBox from "../CodeBox";
import OutputBox from "../OutputBox/OutputBox";
import Button from "./Button";
import { SiJavascript } from "react-icons/si";

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
        // height: "470px",
        // width: "30vw",
        // height: "40vh",
        background: "rgb(0, 0, 0)",
        padding: "2px",
        // background: "red",
        border: "1px solid white",
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
            <div className="text-lg font-bold text-[#ff1561]">
              {dataState.algorithm.toUpperCase()}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
              width: "100%",
              color: "white",
            }}
          >
            <div style={{ display: "flex", fontSize: "14px", gap: "12px" }}>
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
            <div className="flex">
              <button className="text-xs font-bold leading-tight  border-red-300 rounded-lg py-2 px-4 bg-pink-500">
                Exercícios
              </button>
              {/* <div className="flex h-8 p-2 gap-2 ">
                <SiJavascript className="mt-1 text-2xl cursor-pointer text-yellow-300" />
                <div className="icons8-golang cursor-pointer"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8px",
          background: "rgb(0, 0, 0)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            // height: "100%",
          }}
        >
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
