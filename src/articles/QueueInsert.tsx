import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const QueueInsert = () => {
  const code = `let queue = [20,30,40];
queue.concat(10);
console.log(queue)
  `;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Inserir um elemento em uma fila.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(1).</li>
        <li>- Complexidade de Tempo no pior caso: O(1).</li>
      </ul>

      <h2>Implementações</h2>
      <div>
        Dado um fila <strong>queue</strong> insira um elemento.
        <br /> <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          background: "#db0000",
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

        <div style={{ alignSelf: "start" }}>Output: [10,20,30,40] </div>
      </div>
    </div>
  );
};
