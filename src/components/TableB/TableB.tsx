import React from "react";

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

export default TableB;
