import React from "react";
import { Link } from "react-router-dom";

const TableA = ({ handleDataStructure }: any) => {
  return (
    <div
      style={{
        background: "rgb(0, 0, 0)",
        // borderRadius: "10px",
        height: "100%",
        // width: "25%",
        // flex: 1,
        // paddingLeft: "8px",
        border: "1px solid white",
      }}
    >
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <th>Estrutura</th>
            <th colSpan={4}>Complexidade de Tempo</th>
            <th colSpan={4}></th>
            {/* <th>Space Complexity</th> */}
          </tr>
          <tr>
            <th />
            <th colSpan={4}>Médio/Pior</th>
            <th colSpan={4}>Complexidade de espaço</th>
            {/* <th>Worstt</th> */}
          </tr>
          <tr>
            <th />
            <th>Acessar</th>
            <th>Buscar</th>
            <th>Inserir</th>
            <th>Deletar</th>
            <th>Pior</th>
            {/* <th>Access</th> */}
            {/* <th>Search</th> */}
            {/* <th>Insertion</th> */}
            {/* <th>Deletion</th> */}
          </tr>
          <tr onMouseEnter={() => handleDataStructure("array")}>
            <td>Array</td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>

          <tr onMouseEnter={() => handleDataStructure("sll")}>
            <td>Singly-Linked List</td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("bst")}>
            <td>Binary Search Tree</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("dll")}>
            <td>Doubly-Linked List</td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("stack")}>
            <td>Stack</td>
            <td>
              <Link to={`stack_access`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`stack_search`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`stack_insert`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>
            <td>
              <Link to={`stack_delete`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("queue")}>
            <td>Queue</td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow">Θ(n)</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("skip")}>
            <td>Skip List</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">Θ(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">Θ(n)</code>
            </td>

            <td>
              <code className="orange">O(n log(n))</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("hash")}>
            <td>Hash Table</td>
            <td>
              <code className="gray">N/A</code>
              <code className="gray">N/A</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="yellow">O(n)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>

          <tr onMouseEnter={() => handleDataStructure("ct")}>
            <td>Cartesian Tree</td>
            <td>
              <code className="gray">N/A</code>
              <code className="gray">N/A</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("bt")}>
            <td>B-Tree</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("rbt")}>
            <td>Red-Black Tree</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("st")}>
            <td>Splay Tree</td>
            <td>
              <code className="gray">N/A</code>
              <code className="gray">N/A</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("avl")}>
            <td>AVL Tree</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("kt")}>
            <td>KD Tree</td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableA;
