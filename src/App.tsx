import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./api/api";
import AlgoBox from "./components/AlgoBox/AlgoBox";
import CommentsBox from "./components/CommentsBox/CommentsBox";
import TableA from "./components/TableA/TableA";
import TableB from "./components/TableB/TableB";
import TeoriaBox from "./components/TeoriaBox/TeoriaBox";
import ButtonsHead from "./components/ButtonsHead/ButtonsHead";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { selectdataScructure } from "./redux/store";
import { addDataScructure } from "./redux/dataStructureSlice";
import { addActiveButton } from "./redux/btnSlice";

function App() {
  const dispatch = useDispatch();
  // const data = useSelector(selectdataScructure);

  const handleDataStructure = (tipo, op = "buscar") => {
    dispatch(addActiveButton(op));
    dispatch(addDataScructure({ algorithm: tipo, selectedOption: op }));
  };

  return (
    <div style={{ background: "rgb(0,0,0)" }}>
      <div
        style={{
          padding: "10px",
          height: "75vh",
          background: "rgb(0,0,0)",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "72vh" }}
        >
          <ButtonsHead />
          <div
            style={{
              display: "flex",
              background: "rgb(0,0,0)",
              // padding: "10px",
              marginTop: "20px",
              gap: "10px",
              height: "100%",
            }}
          >
            <TableA handleDataStructure={handleDataStructure} />
            <AlgoBox handleDataStructure={handleDataStructure} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              marginTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <TeoriaBox />
            <CommentsBox />
          </div>
          {/* {algoOrd && <TableB />} */}
        </div>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
