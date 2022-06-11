import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const SLLInsert = () => {
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
const insertAtHead = (head, val) => {
  let newNode = new Node(val)
  if(!head){
    head = newNode
    return head
  }else{
    newNode.next = head
    head = newNode
  }
  return head
}
// Fim


const printLinkedList = (head) => {
    let current = head
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}

let newList = insertAtHead(a, 30)
printLinkedList(newList)



`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Inserir um elemento em uma SLL.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(1).</li>
        <li>- Complexidade de Tempo no pior caso: O(1).</li>
      </ul>

      <div style={{ maxWidth: "740px" }}>
        <h1>Observações</h1>
        <div>
          A complexidade de tempo de inserção é apenas O(1) se você já tiver uma
          referência ao nó que deseja inserir depois.
        </div>
      </div>

      <h2>Implementações</h2>
      <div>
        Dado uma Singly Linked List <strong>SLL</strong> e um valor{" "}
        <strong>val</strong> insira no começo da lista um novo nó com o valor
        dado.
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
          Output: 30 <br /> A <br /> B <br /> C <br /> D <br />{" "}
        </div>
      </div>
    </div>
  );
};
