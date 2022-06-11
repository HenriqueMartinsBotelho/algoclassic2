import React from "react";

interface Props {
  link: string;
}

const EditeNoGitHub: React.FC<Props> = ({ link }) => {
  return (
    <div
      style={{
        width: "100%",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        padding: "4px",
        fontWeight: "bold",
      }}
    >
      Achou algum erro um tem alguma sujestão?&nbsp;{" "}
      <a href={link}>Clique aqui</a>&nbsp;e edite essa página no GitHub.{" "}
    </div>
  );
};

export default EditeNoGitHub;
