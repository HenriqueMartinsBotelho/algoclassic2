import React from "react";
import { Link } from "react-router-dom";

const ButtonsHead = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          marginTop: "20px",
        }}
      >
        <button className="btn_page">
          <Link to="/">Home</Link>
        </button>
        <button className="btn_page">
          <Link to="training">Treinar</Link>
        </button>
        <button className="btn_page">
          <Link to="/">Animações</Link>
        </button>
        <button className="btn_page">
          <Link to="about">Sobre</Link>
        </button>
      </div>
    </div>
  );
};

export default ButtonsHead;
