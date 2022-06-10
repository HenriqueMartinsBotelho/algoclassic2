import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const SLLDelete = () => {
  const code = `class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let head = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
    
head.next = b
b.next = c
c.next = d

// Início do Código Principal  
head = b
// Fim
 
const printLinkedList = (head) => {
    let current = head
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}

printLinkedList(head)`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Deletar um elemento em uma SLL.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(1).</li>
        <li>- Complexidade de Tempo no pior caso: O(1).</li>
      </ul>

      <div style={{ maxWidth: "740px" }}>
        <h1>Observações</h1>
        <div>
          Se você deseja excluir um elemento específico, a complexidade de tempo
          é O(n) porque você precisa encontrar o elemento primeiro. Se você
          deseja excluir um elemento em um índice específico i, a complexidade
          de tempo é O(i) porque você precisa seguir os links desde o início. A
          complexidade de tempo de inserção é apenas O(1) se você já tiver uma
          referência ao nó que deseja inserir depois.
        </div>
      </div>

      <h2>Implementações</h2>
      <div>
        Dado uma Singly Linked List <strong>SLL</strong> delete o primeiro
        elemento.
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
          Output: B <br /> C <br /> D <br />{" "}
        </div>
      </div>
    </div>
  );
};
