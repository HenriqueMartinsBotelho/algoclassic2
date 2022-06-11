import React from "react";

export const QueueAccess = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Acessar um elemento em uma fila.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>

      <div style={{ maxWidth: "700px" }}>
        Uma fila é normalmente otimizada para o caso especial de acessar o
        ínicio da fila, não para acessar um elemento específico. Se a fila{" "}
        <strong>P</strong> é um array então podemos acessar o elemento da
        posição <strong>i</strong> em O(1) escrevendo <strong>P[i]</strong>.
      </div>
    </div>
  );
};
