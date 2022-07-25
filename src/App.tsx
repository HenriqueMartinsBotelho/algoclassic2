import React, { useEffect, useState } from "react";
import "./App.css";
import codes from "./api/codes";
import AlgoBox from "./components/AlgoBox/AlgoBox";
import CommentsBox from "./components/CommentsBox/CommentsBox";
import TableA from "./components/TableA/TableA";
import TableB from "./components/TableB/TableB";
import TeoriaBox from "./components/TeoriaBox/TeoriaBox";
import ButtonsHead from "./components/ButtonsHead/ButtonsHead";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [algoOrd, setAlgoOrd] = useState();
  const [dataStructure, setDataStructure] = useState("array");
  const [dataContent, setDataContent] = useState("");
  const [option, setOption] = useState("inserir");
  const [teoria, setTeoria] = useState("");

  const handleOption = (op) => {
    setOption(op);
  };

  const getDataStructure = (tipo) => {
    handleOption("acessar");
    setDataContent(codes[tipo]);
    return codes[tipo.teste];
  };

  const handleDataStructure = (tipo) => {
    setDataStructure(tipo);
    const { teoria } = getDataStructure(dataStructure);
    setTeoria(teoria);
    getDataStructure(tipo);
  };

  return (
    <div style={{ background: "rgb(35, 39, 47)" }}>
      <div
        style={{
          padding: "10px",
          height: "75vh",
          background: "rgb(35, 39, 47)",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "72vh" }}
        >
          <ButtonsHead />
          <div
            style={{
              display: "flex",
              background: "rgb(35, 39, 47)",
              padding: "10px",
              marginTop: "20px",
              gap: "10px",
              height: "100%",
            }}
          >
            <TableA handleDataStructure={handleDataStructure} />
            <AlgoBox
              dataStructure={dataStructure}
              dataContent={dataContent}
              option={option}
              handleOption={handleOption}
              // btnColors={btnColors}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <CommentsBox />
            <TeoriaBox teoria={teoria} />
          </div>
          {algoOrd && <TableB />}
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
