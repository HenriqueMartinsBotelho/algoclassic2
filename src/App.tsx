import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Aviso } from "./components/Aviso";

// import [btnColor, setbtnColor] = useState()

function App() {
  return (
    <>
      <Aviso
        message=" Projeto em desenvolvimento! 7% concluído 😅 - Atualizado em: 11/06/2022"
        repository="https://github.com/HenriqueMartinsBotelho/algoclassic2"
        reponame="algoclassic2"
      />
      <div className="App">
        <div id="tablesWrapper">
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
          <h3>🟢 Completo - 🔴 Desenvolvendo </h3>

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
              <tr>
                <td>
                  <Link to={`algo/array`}>🟢Array</Link>
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
              <tr>
                <td>
                  <a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">
                    🟢Stack
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
                      🟢 Queue
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
                  <Link to={`algo/singly_list`}> 🟢 Singly-Linked List</Link>
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
                    🔴 Doubly-Linked List
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
                  <a href="http://en.wikipedia.org/wiki/Skip_list">
                    🔴 Skip List
                  </a>
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
                  <a href="http://en.wikipedia.org/wiki/Hash_table">
                    🔴 Hash Table
                  </a>
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
                    🔴 Binary Search Tree
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
                    🔴 Cartesian Tree
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
                  <a href="http://en.wikipedia.org/wiki/B_tree">🔴 B-Tree</a>
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
                    🔴 Red-Black Tree
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
                  <a href="https://en.wikipedia.org/wiki/Splay_tree">
                    🔴 Splay Tree
                  </a>
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
                  <a href="http://en.wikipedia.org/wiki/AVL_tree">
                    🔴 AVL Tree
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
                  <a href="http://en.wikipedia.org/wiki/K-d_tree">🔴 KD Tree</a>
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
          <h2 id="sorting">Algoritmos de Ordenação</h2>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Algoritmo</th>
                <th colSpan={3}>Complexidade de Tempo</th>
                <th>Complexidade de espaço</th>
              </tr>
              <tr>
                <th />
                <th>Melhor</th>
                <th>Médio</th>
                <th>Pior</th>
                <th>Pior</th>
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
                  <a href="http://en.wikipedia.org/wiki/Merge_sort">
                    Mergesort
                  </a>
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
                  <a href="https://en.wikipedia.org/wiki/Tree_sort">
                    Tree Sort
                  </a>
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
                  <a href="http://en.wikipedia.org/wiki/Shellsort">
                    Shell Sort
                  </a>
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
    </>
  );
}

export default App;
