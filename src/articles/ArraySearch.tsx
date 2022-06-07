import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const ArraySearch = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Busca em array</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>
      <h2>Implementações</h2>
      <div>
        Dado um array <strong>arr</strong> de <strong>n</strong> elementos
        queremos encontrar um dado elemento <strong>x</strong> nele.
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
          value={`function search(arr, n, x){\n  let i;\n  for (i = 0; i < n; i++) if(arr[i] == x) return i;\n  return -1;\n}
          \narr = [10, 20, 30, 40, 50];\nlet x = 30;\nlet n = arr.length;\nlet result = search(arr, n, x);\nresult === -1
            ? console.log("Elemento não está presente no arrayElement is not present in array")
            : console.log("Elemento presente na posição " + result);
          `}
          width="740px"
          // height="200px"
          extensions={[javascript({ jsx: true })]}
        />

        <div style={{ alignSelf: "start" }}>
          Output: Elemento está presente na posição 2
        </div>
      </div>
    </div>
  );
};
