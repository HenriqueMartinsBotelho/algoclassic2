import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const StackAccess = () => {
  const code = `let arr = [10, 20, 30, 40]
let i = 2
arr.splice(i, 1)
console.log(arr)
  `;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Acessar um elemento em uma pilha.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>

      <div style={{ maxWidth: "700px" }}>
        Uma pilha é normalmente otimizada para o caso especial de acessar o topo
        da pilha, não para acessar um elemento específico. Se a pilha{" "}
        <strong>P</strong> é um array então podemos acessar o elemento da
        posição <strong>i</strong> em O(1) escrevendo <strong>P[i]</strong>.
      </div>
    </div>
  );
};
