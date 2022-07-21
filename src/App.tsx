import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import { Aviso } from "./components/Aviso";
import CodeBox from "./components/CodeBox";
import codes from "./api/codes";

// import [btnColor, setbtnColor] = useState()

function App() {
  const [algoOrd, setAlgoOrd] = useState();
  const [dataStructure, setDataStructure] = useState("array");
  const [dataContent, setDataContent] = useState("");
  const [option, setOption] = useState("inserir");

  const handleOption = (op) => {
    setOption(op);
  };

  const getDataStructure = (tipo) => {
    // console.log(codes[tipo]);
    setDataContent(codes[tipo]);
    return codes[tipo];
  };

  const handleDataStructure = (tipo) => {
    setDataStructure(tipo);
    getDataStructure(tipo);
  };

  return (
    <div style={{ background: "rgb(35, 39, 47)" }}>
      {/* <Aviso
        message=" Projeto em desenvolvimento! 7% concluído 😅 - Atualizado em: 11/06/2022"
        repository="https://github.com/HenriqueMartinsBotelho/algoclassic2"
        reponame="algoclassic2"
      /> */}
      <div
        style={{
          padding: "10px",
          height: "75vh",
          background: "rgb(35, 39, 47)",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "72vh" }}
        >
          <ButtonsHead />
          <div
            style={{
              display: "flex",
              background: "rgb(35, 39, 47)",
              padding: "10px",
              marginTop: "20px",
              gap: "10px",
              height: "100%",
              flexWrap: "wrap",
            }}
          >
            <TableA handleDataStructure={handleDataStructure} />
            <AlgoBox
              dataStructure={dataStructure}
              dataContent={dataContent}
              option={option}
              handleOption={handleOption}
            />
          </div>
          {algoOrd && <TableB />}
        </div>
      </div>
    </div>
  );
}

const AlgoBox = ({ dataStructure, dataContent, option, handleOption }: any) => {
  const code = dataContent[option];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // width: "50%",
        height: "100%",
        // width: "30vw",
        // height: "40vh",
        background: "rgb(52, 58, 70)",
        borderRadius: "10px",
        padding: "2px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
              color: "white",
              fontSize: "22px",
            }}
          >
            {dataStructure}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              width: "100%",
              color: "white",
            }}
          >
            <div style={{ display: "flex", fontSize: "18px", gap: "12px" }}>
              <button onClick={() => handleOption("acessar")}>Acessar</button>
              <button>Buscar</button>
              <button>Inserir</button>
              <button>Deletar</button>
            </div>
            <div style={{ fontSize: "18px" }}>Teoria</div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8px",
          background: "rgb(52, 58, 70)",
        }}
      >
        <div style={{ display: "flex", width: "50%", height: "100%" }}>
          <CodeBox
            code={code}
            style={{
              display: "flex",
              height: "100%",
              // border: "1px solid blue",
              width: "100%",
            }}
            minWidth="100%"
          />
        </div>
        <OutPutBox />
      </div>
    </div>
  );
};

const OutPutBox = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        background: "rgb(52, 58, 70)",
        // borderLeft: "1px solid whitesmoke",
        color: "white",
        padding: "0px 6px",
        marginLeft: "10px",
        width: "50%",
      }}
    >
      aaaaa
    </div>
  );
};

const TableA = ({ handleDataStructure }: any) => {
  return (
    <div
      style={{
        background: "rgb(52, 58, 70)",
        borderRadius: "10px",
        height: "100%",
        // width: "45%",
        flex: 1,
        padding: "2px",
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

const TableB = () => {
  return (
    <>
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
              <a href="http://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a>
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
    </>
  );
};

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

export default App;
