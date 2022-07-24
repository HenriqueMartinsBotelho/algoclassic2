import React from "react";
import { Link } from "react-router-dom";

const TableA = ({ handleDataStructure }: any) => {
  return (
    <div
      style={{
        background: "rgb(52, 58, 70)",
        // borderRadius: "10px",
        height: "100%",
        // width: "25%",
        flex: 1,
        paddingLeft: "8px",
        // border: "1px solid black",
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
            <td>
              <Link to={`algo/array`}> Array</Link>
            </td>
            <td>
              <Link to={`array_access`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>
            <td>
              <Link to={`array_search`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`array_insert`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`array_delete`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr onMouseEnter={() => handleDataStructure("stack")}>
            <td>
              <a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">
                Stack
              </a>
            </td>
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
          <tr>
            <td>
              <Link to={`queue_access`}>
                <a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">
                  Queue
                </a>
              </Link>
            </td>
            <td>
              <Link to={`queue_insert`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`queue_search`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`queue_delete`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>
            <td>
              <code className="green">Θ(1)</code>
              <code className="green">Θ(1)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={`algo/singly_list`}> Singly-Linked List</Link>
            </td>
            <td>
              <Link to={`sll_access`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`sll_search`}>
                <code className="yellow">Θ(n)</code>
                <code className="yellow">Θ(n)</code>
              </Link>
            </td>
            <td>
              <Link to={`sll_insert`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>
            <td>
              <Link to={`sll_delete`}>
                <code className="green">Θ(1)</code>
                <code className="green">Θ(1)</code>
              </Link>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/Doubly_linked_list">
                Doubly-Linked List
              </a>
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
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/Skip_list">Skip List</a>
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
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">Θ(n)</code>
            </td>

            <td>
              <code className="orange">O(n log(n))</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/Hash_table">Hash Table</a>
            </td>
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
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/Binary_search_tree">
                Binary Search Tree
              </a>
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
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow">O(n)</code>
            </td>

            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Cartesian_tree">
                Cartesian Tree
              </a>
            </td>
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
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/B_tree"> B-Tree</a>
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
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/Red-black_tree">
                Red-Black Tree
              </a>
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
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Splay_tree">Splay Tree</a>
            </td>
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
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/AVL_tree">AVL Tree</a>
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
              <code className="yellow-green">Θ(log(n))</code>
              <code className="yellow-green">Θ(log(n))</code>
            </td>
            <td>
              <code className="yellow">O(n)</code>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://en.wikipedia.org/wiki/K-d_tree"> KD Tree</a>
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
