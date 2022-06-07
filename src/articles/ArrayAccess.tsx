import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const ArrayAccess = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = (code: string) => {
    console.log(code);
    // let y = `const test = () => {if(true) return { eval(${code})  } }; test()`;
    // let x = eval(y);
    // console.log("x= " + x);
    let x = "";
    try {
      x = eval(`${code}`);
    } catch (error) {
      console.log("Error 1: " + error);
    }
    setOutput(() => x);
    // console.log("oo", output);
    // console.log(eval(code));
  };

  // useEffect(() => {
  //   setOutput(() => eval(`${code}`));
  // }, [output]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Acessando um elemento de um array</h1>
      <ul>
        <li>- Complexidade de Tempo no caso médio: O(1).</li>
        <li>- Complexidade de Tempo no pior caso: O(1).</li>
      </ul>
      Não importa o número de elementos no array, para acessa-lo é feita uma
      única multiplicação e adição.
      <br /> Por baixo dos panos temos algo como:{" "}
      <strong>
        element_memory_location = start_memory_location + (size_of_element \*
        index_in_array).
      </strong>
      <h2>JavaScript</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <CodeMirror
          value={`let a = [10, 20, 30, 40];\nconst f = () => {return a[2]};\nconsole.log(f())`}
          width="300px"
          // height="200px"
          extensions={[javascript({ jsx: true })]}
        />

        <div
          style={{
            width: "300px",
            height: "200px",
          }}
        >
          <div style={{ display: "flex" }}>
            Output: 30
            <div style={{ color: "#EB2672", fontWeight: "bold" }}>{output}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
