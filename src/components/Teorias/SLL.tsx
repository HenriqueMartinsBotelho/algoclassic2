import React from "react";
import sll_img from "./../../assets/sll_img.png";

const SLL = () => {
  return (
    <div className="flex-col">
      <div className="text-2xl text-[#ff1561]  mb-6 flex justify-center">
        Singly Linked List
      </div>

      <div className="mb-6 bg-slate-600 p-2">
        Uma lista encadeada é composta por uma série linear de nós (para
        arranjos não lineares de nós, veja Árvores e Grafos). Esses nós,
        diferentemente dos elementos em uma matriz, não precisam estar
        localizados próximos uns dos outros na memória para serem acessados. A
        razão é que cada nó contém um link para outro nó.
        <br />
        <div className="flex justify-center m-2">
          <img src={sll_img} />
        </div>
      </div>
    </div>
  );
};

export default SLL;
