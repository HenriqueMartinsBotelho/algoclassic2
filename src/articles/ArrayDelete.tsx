import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const ArrayDelete = () => {
  const code = `let arr = [10, 20, 30, 40]
let i = 2
arr.splice(i, 1)
console.log(arr)
  `;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Deletar um elemento em um array.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>

      <h2>Implementações</h2>
      <div>
        Dado um array <strong>arr</strong> e uma posição <strong>i</strong>{" "}
        remover o elemento após essa posição.
        <br /> <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          background: "aliceblue",
          padding: "0px 8px",
        }}
      >
        <h2>JavaScript</h2>
        <CodeMirror
          value={code}
          width="740px"
          // height="200px"
          extensions={[javascript({ jsx: true })]}
        />

        <div style={{ alignSelf: "start" }}>Output: [10, 20, 40]</div>
      </div>
    </div>
  );
};
