import React from "react";
import bst_img from "./../../assets/bst_img.png";
import bst_img2 from "./../../assets/bst_img2.png";

const BST = () => {
  return (
    <div className="flex-col">
      <div className="text-2xl text-[#ff1561]  mb-6 flex justify-center">
        Binary Search Tree
      </div>

      <div className="mb-6 bg-slate-600 p-2">
        &quot;Uma árvore binária de busca é uma estrutura de dados de árvore
        binária baseada em nós, onde todos os nós da subárvore esquerda possuem
        um valor numérico inferior ao nó raiz e todos os nós da subárvore
        direita possuem um valor superior ao nó raiz (esta é a forma padrão,
        podendo as subárvores serem invertidas, dependendo da aplicação). O
        objetivo desta árvore é estruturar os dados de forma a permitir busca
        binária. &quot;&nbsp;
        <a href="https://pt.wikipedia.org/wiki/%C3%81rvore_bin%C3%A1ria_de_busca">
          Wikipedia.
        </a>
        <br />
        <div className="flex justify-center m-2">
          <img src={bst_img} alt="bst" />
        </div>
      </div>
      <div>
        <div className="text-xm font-bold text-blue-400  mb-4">1) Inserir</div>O
        primeiro passo da função é criar um objeto Node, passando os dados que o
        nó armazenará. A segunda etapa na inserção é verificar a BST para um nó
        raiz. Se um nó raiz não existir, então a BST é vazia e este nó é o nó
        raiz. Caso contrário, a função passa para a próxima etapa. Se o nó que
        está sendo inserido não for o nó raiz, temos que nos preparar para
        percorrer a BST para encontrar o ponto de inserção adequado. Esse
        processo é semelhante a percorrer uma SLL. A função usa um objeto Node
        que é atribuído como o nó atual enquanto a função se move de nível para
        nível na BST. A função também tem que se posicionar dentro da BST no nó
        raiz. Uma vez dentro da BST, o próximo passo é determinar onde colocar o
        nó. Isso é feito dentro de um loop que quebra quando o ponto de inserção
        correto é determinado. O algoritmo para determinar o ponto de inserção
        correto para um nó é o seguinte:
        <br />
        <br />
        <ul>
          <li>1) Defina o nó raiz para ser o nó atual.</li>
          <li>
            2) Se o valor dos dados no nó inserido for menor que o valor dos
            dados no nó atual, defina o novo nó atual para ser o filho esquerdo
            do nó atual. Se o valor dos dados no nó inserido é maior que o valor
            de dados no nó atual, pule para a etapa 4.
          </li>
          <li>
            3) Se o valor do filho esquerdo do nó atual for nulo, insira o novo
            nó aqui e sair do loop. Caso contrário, pule para a próxima iteração
            do loop.
          </li>
          <li>
            {" "}
            4) Configure o nó atual para ser o filho direito do nó atual.
          </li>
          <li>
            5) Se o valor do filho direito do nó atual for nulo, insira o novo
            nó aqui e saia do loop. Caso contrário, pule para a próxima iteração
            do loop.
          </li>
        </ul>
        <div className="flex justify-center m-2">
          <img src={bst_img2} alt="bst" />
        </div>
      </div>
      <div>
        <div className="text-xm font-bold text-blue-400  mb-4">2) Busca</div>A
        busca em uma árvore binária por um valor específico pode ser um processo
        recursivo ou iterativo. Abaixo apresentamos um pseudocódigo da busca
        recursiva. A busca começa examinando o nó raiz. Se a árvore está vazia,
        o valor procurado não pode existir na árvore. Caso contrário, se o valor
        é igual a raiz, a busca foi bem sucedida. Se o valor é menor do que a
        raiz, a busca segue pela subárvore esquerda. Similarmente, se o valor é
        maior do que a raiz, a busca segue pela subárvore direita. Esse processo
        é repetido até o valor ser encontrado ou a subárvore ser nula (vazia).
        Se o valor não for encontrado até a busca chegar na subárvore nula,
        então o valor não deve estar presente na árvore.
        <div className="flex justify-center m-2">
          <img src={bst_img2} alt="bst" />
        </div>
      </div>
    </div>
  );
};

export default BST;
