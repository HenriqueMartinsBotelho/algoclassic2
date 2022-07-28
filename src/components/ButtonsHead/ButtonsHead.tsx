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
          <Link to="/">
            <div className="text-white">Home</div>
          </Link>
        </button>
        <button className="btn_page">
          <Link to="/">
            <div className="text-white">Treinar</div>
          </Link>
        </button>
        {/* <button className="btn_page">
          <Link to="/">
            <div className="text-white">Animações</div>
          </Link>
        </button> */}
        <button className="btn_page">
          <Link to="about">
            <div className="text-white">Sobre</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ButtonsHead;
