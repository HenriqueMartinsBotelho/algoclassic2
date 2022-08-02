import React from "react";

const ArrayTeoria = () => {
  return (
    <div>
      <div className="flex-col">
        <div className="text-2xl text-white  mb-6 flex justify-center">
          Array
        </div>

        <div className="mb-6 bg-slate-600 p-2">
          Um array é uma estrutura de dados linear onde o mesmo tipo de dados é
          armazenado no endereço de memória consecutivo.
          <br />
          <strong>Array unidimensional:</strong> É conhecido como array 1D ou
          array de dimensão única.
          <br />
          <strong>Matriz multidimensional:</strong> Os arrays que possuem mais
          de uma dimensão são chamadas de arrays multidimensional, como matriz
          2D, matriz 3D, etc.
        </div>

        <div>
          <div className="text-xm font-bold text-blue-400  mb-4">
            1) Acessando um elemento de um array
          </div>
          Não importa o número de elementos no array, para acessa-lo é feita uma
          única multiplicação e adição.
          <br /> Por baixo dos panos temos algo como:{" "}
          <code className="flex justify-center text-cyan-400">
            element_memory_location = start_memory_location + (size_of_element
            \* index_in_array).
          </code>
        </div>
        {/* <hr className="m-4" /> */}
        <div>
          <div className="text-xm font-bold text-blue-400  mb-4 mt-6">
            2) Buscar um elemento de um array
          </div>
          Para garantir que um dado elemento pertence a um array não ordenado
          precisamos percorrer todos os elementos do array.
        </div>
        <div>
          <div className="text-xm font-bold text-blue-400  mb-4 mt-6">
            3) Inserir um elemento de um array
          </div>
          Inserir um elemento em um array no médio/pior caso leva O(n).
        </div>
        <div>
          <div className="text-xm font-bold text-blue-400  mb-4 mt-6">
            4) Deletar um elemento de um array
          </div>
          Deletar um elemento em um array no médio/pior caso leva O(n).
        </div>
      </div>
    </div>
  );
};

export default ArrayTeoria;
