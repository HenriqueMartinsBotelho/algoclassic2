import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import EditeNoGitHub from "../components/EditeNoGitHub";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeBox from "../components/CodeBox";

export const SLLAccess = () => {
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
const getNth = (head, index) => {
    let current = head
    let count = 0
    while(current != null){
        if(count === index) {
            return current
        }
        count++
        current = current.next 
    }
    return -1;
}
// Fim

const element = getNth(a,2)
console.log(element.val)`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <EditeNoGitHub link="https://github.com/HenriqueMartinsBotelho/algoclassic2/blob/main/src/articles/SLLAccess.tsx" />
      <h1>Acessar um elemento em uma SLL.</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(n).</li>
        <li>- Complexidade de Tempo no pior caso: O(n).</li>
      </ul>
      <h2>Implementações</h2>
      <div>
        Dado uma Singly Linked List <strong>SLL</strong> queremos acessar o{" "}
        <strong>n-ésimo</strong> elemento dela. <br /> <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          // background: "#db0000",
          color: 'black',
          padding: "0px 8px",
        }}
      >
        <h2>JavaScript</h2>
        {/* <CodeMirror
          value={code}
          width="740px"
          // height="200px"
          // theme={oneDark}
          extensions={[javascript({ jsx: true })]}
        /> */}
        <CodeBox/>

        <div style={{ alignSelf: "start" }}>Output: C</div>
      </div>
    </div>
  );
};
