import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        background: "black",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          color: "#41FB3B",
          fontSize: "20px",
          marginBottom: "10%",
        }}
      >
        Muitos estudantes de algoritmos e estrutura de dados já se depararam com
        essa famosa tabela criada pelo
        <a style={{ color: "#EE0B86" }} href="https://twitter.com/ericdrowell">
          {" "}
          Eric Rowell
        </a>{" "}
        disponível originalmente em{" "}
        <a style={{ color: "#EE0B86" }} href="https://www.bigocheatsheet.com/">
          https://www.bigocheatsheet.com/
        </a>{" "}
        . Decidi aperfeiçoar essa criação explicando os algoritmos, as
        estruturas de dados e suas operações em três linguagens:{" "}
        <span style={{ color: "yellow" }}>Python, JavaScript e C++.</span>
      </div>
    </div>
  );
};

export default About;
