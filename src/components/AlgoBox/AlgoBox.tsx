import React from "react";
import CodeBox from "../CodeBox";
import OutputBox from "../OutputBox/OutputBox";

const AlgoBox = ({
  dataStructure,
  dataContent,
  option,
  handleOption,
  btnColors,
}: any) => {
  const code = dataContent[option];

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
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
              color: "white",
              fontSize: "20px",
            }}
          >
            {dataStructure.toUpperCase()}
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
              <button
                style={{ color: btnColors["acessar"] }}
                onClick={() => handleOption("acessar")}
              >
                Acessar
              </button>
              <button
                style={{ color: btnColors["buscar"] }}
                onClick={() => handleOption("buscar")}
              >
                Buscar
              </button>
              <button
                style={{ color: btnColors["inserir"] }}
                onClick={() => handleOption("inserir")}
              >
                Inserir
              </button>
              <button
                style={{ color: btnColors["deletar"] }}
                onClick={() => handleOption("deletar")}
              >
                Deletar
              </button>
            </div>
            <button style={{ color: "green", fontWeight: "bold" }}>
              Teoria
            </button>
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
