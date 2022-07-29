import React from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { selectdataScructure } from "../../redux/store";
import Array from "../Teorias/Array";
import DLL from "../Teorias/DLL";
import SLL from "../Teorias/SLL";
import Stack from "../Teorias/Stack";
import Queue from "../Teorias/Queue";
import Skip from "../Teorias/Skip";
import Hash from "../Teorias/Hash";
import BST from "../Teorias/BST";
import CT from "../Teorias/CT";
import BT from "../Teorias/BT";
import RBT from "../Teorias/RBT";
import ST from "../Teorias/ST";
import AVL from "../Teorias/AVL";
import KT from "../Teorias/KT";

// reduzir imports com index.js

const TeoriaBox = ({ teoria }: any) => {
  const state = useSelector(selectdataScructure);

  return (
    <div style={{ width: "80%" }}>
      {/* <div style={{ color: "white", fontSize: "22px", margin: "10px 0px" }}>
        Teoria
      </div> */}
      <div
        style={{
          background: "rgb(52, 58, 70)",
          minHeight: "300px",
          maxHeight: "388px",
          padding: "10px",
          color: "white",
          overflow: "auto",
        }}
      >
        {api[state.algorithm]["teoria"] === "array_teoria" && <Array />}
        {api[state.algorithm]["teoria"] === "sll_teoria" && <SLL />}
        {api[state.algorithm]["teoria"] === "dll_teoria" && <DLL />}
        {api[state.algorithm]["teoria"] === "stack_teoria" && <Stack />}
        {api[state.algorithm]["teoria"] === "queue_teoria" && <Queue />}
        {api[state.algorithm]["teoria"] === "skip_teoria" && <Skip />}
        {api[state.algorithm]["teoria"] === "hash_teoria" && <Hash />}
        {api[state.algorithm]["teoria"] === "bst_teoria" && <BST />}
        {api[state.algorithm]["teoria"] === "ct_teoria" && <CT />}
        {api[state.algorithm]["teoria"] === "bt_teoria" && <BT />}
        {api[state.algorithm]["teoria"] === "rbt_teoria" && <RBT />}
        {api[state.algorithm]["teoria"] === "st_teoria" && <ST />}
        {api[state.algorithm]["teoria"] === "avl_teoria" && <AVL />}
        {api[state.algorithm]["teoria"] === "kt_teoria" && <KT />}
      </div>
    </div>
  );
};

export default TeoriaBox;
