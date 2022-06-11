import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const StackSearch = () => {
  const code = `function search(arr, n, x){
let i;
for (i = 0; i < n; i++) if(arr[i] == x) return i;
return -1;
}
        
arr = [10, 20, 30, 40, 50];
let x = 30;
let n = arr.length;
let result = search(arr, n, x);
result === -1
          ? console.log("Elemento não está presente.")
          : console.log("Elemento presente na posição " + result);
  `;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Encontrar um elemento em uma pilha.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>

      <h2>Implementações</h2>
      <div>
        Dado um pilha encontar um elemento nela.
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

        <div style={{ alignSelf: "start" }}>
          Output: Elemento está presente na posição 2
        </div>
      </div>
    </div>
  );
};
