import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

// import [btnColor, setbtnColor] = useState()

function App() {
  const [color1, setColor1] = useState("pink");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [color4, setColor4] = useState("white");

  const handleColor = (s: string) => {
    setColor1(s === "btn_aprender" ? "pink" : "white");
    setColor2(s === "btn_treinar" ? "pink" : "white");
    setColor3(s === "btn_sobre" ? "pink" : "white");
    setColor4(s === "btn_animacoes" ? "pink" : "white");
    // if (s === "btn_aprender") setColor1("blue");
    // else if (s === "btn_treinar") setColor2("blue");
    // else if (s === "btn_sobre") setColor3("blue");
  };

  return (
    <div className="App">
      <div id="tablesWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginTop: "20px",
          }}
        >
          <button
            className="btn_page"
            style={{ color: color1 }}
            onClick={() => {
              handleColor("btn_aprender");
            }}
          >
            Aprender
          </button>
          <button
            className="btn_page"
            style={{ color: color2 }}
            onClick={() => {
              handleColor("btn_treinar");
            }}
          >
            Treinar
          </button>
          <button
            className="btn_page"
            style={{ color: color4 }}
            onClick={() => {
              handleColor("btn_animacoes");
            }}
          >
            Animações
          </button>
          <Link to="about">
            <button
              className="btn_page"
              style={{ color: color3 }}
              onClick={() => {
                handleColor("btn_sobre");
              }}
            >
              Sobre
            </button>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px 0px",
            // background: "red",
            border: "3px dashed black",
            padding: "8px",
          }}
        >
          <h2 id="data-structures">
            Clique em uma operação na tabela e aprenda!
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <a
              style={{ color: "blue" }}
              href="https://github.com/HenriqueMartinsBotelho/algoclassic2"
            >
              Repositório GitHub
            </a>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Data Structure</th>
              <th colSpan={8}>Time Complexity</th>
              <th>Space Complexity</th>
            </tr>
            <tr>
              <th />
              <th colSpan={4}>Average</th>
              <th colSpan={4}>Worst</th>
              <th>Worst</th>
            </tr>
            <tr>
              <th />
              <th>Access</th>
              <th>Search</th>
              <th>Insertion</th>
              <th>Deletion</th>
              <th>Access</th>
              <th>Search</th>
              <th>Insertion</th>
              <th>Deletion</th>
              <th />
            </tr>
            <tr>
              <td>
                <Link to={`algo/array`}>Array</Link>
              </td>
              <td>
                <Link to={`array_access`}>
                  <code className="green">Θ(1)</code>
                </Link>
              </td>
              <td>
                <Link to={`array_search`}>
                  <code className="yellow">Θ(n)</code>
                </Link>
              </td>
              <td>
                <Link to={`array_insertion`}>
                  <code className="yellow">Θ(n)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/array_deletion`}>
                  <code className="yellow">Θ(n)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/array_access`}>
                  <code className="green">O(1)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/array_search`}>
                  <code className="yellow">O(n)</code>
                </Link>
              </td>
              <Link to={`algo/array_insertion`}>
                <code className="yellow">Θ(n)</code>
              </Link>
              <td>
                <Link to={`algo/array_deletion`}>
                  <code className="yellow">O(n)</code>
                </Link>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">
                  Stack
                </a>
              </td>
              <td>
                <code className="yellow">Θ(n)</code>
              </td>
              <td>
                <code className="yellow">Θ(n)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">
                  Queue
                </a>
              </td>
              <td>
                <code className="yellow">Θ(n)</code>
              </td>
              <td>
                <code className="yellow">Θ(n)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={`algo/singly_list`}>Singly-Linked List</Link>
              </td>
              <td>
                <Link to={`algo/singly_access`}>
                  <code className="yellow">Θ(n)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/singly_search`}>
                  <code className="yellow">Θ(n)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/singly_insertion`}>
                  <code className="green">Θ(1)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/singly_delete`}>
                  <code className="green">Θ(1)</code>
                </Link>
              </td>
              <Link to={`algo/singly_access`}>
                <code className="yellow">Θ(n)</code>
              </Link>
              <td>
                <Link to={`algo/singly_search`}>
                  <code className="yellow">O(n)</code>
                </Link>
              </td>

              <td>
                <Link to={`algo/singly_insertion`}>
                  <code className="green">O(1)</code>
                </Link>
              </td>
              <td>
                <Link to={`algo/singly_delete`}>
                  <code className="green">O(1)</code>
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
              </td>
              <td>
                <code className="yellow">Θ(n)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
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
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
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
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="green">Θ(1)</code>
              </td>
              <td>
                <code className="gray">N/A</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
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
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
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
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="gray">N/A</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/B_tree">B-Tree</a>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
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
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://en.wikipedia.org/wiki/Splay_tree">
                  Splay Tree
                </a>
              </td>
              <td>
                <code className="gray">N/A</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="gray">N/A</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
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
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/K-d_tree">KD Tree</a>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow-green">Θ(log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 id="sorting">Array Sorting Algorithms</h2>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Algorithm</th>
              <th colSpan={3}>Time Complexity</th>
              <th>Space Complexity</th>
            </tr>
            <tr>
              <th />
              <th>Best</th>
              <th>Average</th>
              <th>Worst</th>
              <th>Worst</th>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Quicksort">Quicksort</a>
              </td>
              <td>
                <code className="orange">Ω(n log(n))</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="yellow-green">O(log(n))</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Merge_sort">Mergesort</a>
              </td>
              <td>
                <code className="orange">Ω(n log(n))</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="orange">O(n log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Timsort">Timsort</a>
              </td>
              <td>
                <code className="yellow">Ω(n)</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="orange">O(n log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Heapsort">Heapsort</a>
              </td>
              <td>
                <code className="orange">Ω(n log(n))</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="orange">O(n log(n))</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Bubble_sort">
                  Bubble Sort
                </a>
              </td>
              <td>
                <code className="yellow">Ω(n)</code>
              </td>
              <td>
                <code className="red">Θ(n^2)</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Insertion_sort">
                  Insertion Sort
                </a>
              </td>
              <td>
                <code className="yellow">Ω(n)</code>
              </td>
              <td>
                <code className="red">Θ(n^2)</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Selection_sort">
                  Selection Sort
                </a>
              </td>
              <td>
                <code className="red">Ω(n^2)</code>
              </td>
              <td>
                <code className="red">Θ(n^2)</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://en.wikipedia.org/wiki/Tree_sort">Tree Sort</a>
              </td>
              <td>
                <code className="orange">Ω(n log(n))</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="http://en.wikipedia.org/wiki/Shellsort">Shell Sort</a>
              </td>
              <td>
                <code className="orange">Ω(n log(n))</code>
              </td>
              <td>
                <code className="red">Θ(n(log(n))^2)</code>
              </td>
              <td>
                <code className="red">O(n(log(n))^2)</code>
              </td>
              <td>
                <code className="green">O(1)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  rel="tooltip"
                  title="Only for integers. k is a number of buckets"
                  href="http://en.wikipedia.org/wiki/Bucket_sort"
                >
                  Bucket Sort
                </a>
              </td>
              <td>
                <code className="green">Ω(n+k)</code>
              </td>
              <td>
                <code className="green">Θ(n+k)</code>
              </td>
              <td>
                <code className="red">O(n^2)</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  rel="tooltip"
                  title="Constant number of digits 'k'"
                  href="http://en.wikipedia.org/wiki/Radix_sort"
                >
                  Radix Sort
                </a>
              </td>
              <td>
                <code className="green">Ω(nk)</code>
              </td>
              <td>
                <code className="green">Θ(nk)</code>
              </td>
              <td>
                <code className="green">O(nk)</code>
              </td>
              <td>
                <code className="yellow">O(n+k)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  rel="tooltip"
                  title="Difference between maximum and minimum number 'k'"
                  href="https://en.wikipedia.org/wiki/Counting_sort"
                >
                  Counting Sort
                </a>
              </td>
              <td>
                <code className="green">Ω(n+k)</code>
              </td>
              <td>
                <code className="green">Θ(n+k)</code>
              </td>
              <td>
                <code className="green">O(n+k)</code>
              </td>
              <td>
                <code className="yellow">O(k)</code>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://en.wikipedia.org/wiki/Cubesort">Cubesort</a>
              </td>
              <td>
                <code className="yellow">Ω(n)</code>
              </td>
              <td>
                <code className="orange">Θ(n log(n))</code>
              </td>
              <td>
                <code className="orange">O(n log(n))</code>
              </td>
              <td>
                <code className="yellow">O(n)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
