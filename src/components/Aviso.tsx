import React from "react";

interface AvisoProps {
  message: string;
  repository: string;
  reponame: string;
}

export const Aviso = ({ message, repository, reponame }: AvisoProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        color: "white",
        width: "100vw",
        padding: "4px",
        fontWeight: "700",
        flexWrap: "wrap",
      }}
    >
      {message}
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        GitHub:{" "}
        <a style={{ color: "pink" }} href={repository}>
          {reponame}
        </a>
      </span>
      <span style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        Mais projetos em:{" "}
        <a style={{ color: "pink" }} href="https://www.henriquembotelho.dev.br">
          henriquembotelho.dev.br
        </a>
      </span>
    </div>
  );
};
