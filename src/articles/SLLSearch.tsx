import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const SLLSearch = () => {
  const code = `class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
    
a.next = b
b.next = c
c.next = d

// Início do código principal
const searchElement = (head, val) => {
  let current = head
  while (current != null){
    if(current.val === val) return true
    current = current.next
  }
  return false
}
// Fim

console.log(searchElement(a, 'B'))
console.log(searchElement(a, 'E'))`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Encontrar um elemento em uma SLL.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>
      <h2>Implementações</h2>
      <div>
        Dado uma Singly Linked List <strong>SLL</strong> e um valor{" "}
        <strong>val</strong> retorne <strong>true</strong> se existe um elemento
        com esse valor e <strong>false</strong> caso contrário.
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

        <div style={{ alignSelf: "start" }}>
          Output: false <br /> true{" "}
        </div>
      </div>
    </div>
  );
};
