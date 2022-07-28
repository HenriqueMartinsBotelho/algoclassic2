const api = {
  array: {
    acessar: `let a = [10, 20, 30, 40]; 
console.log(a[2])`,
    buscar: `// Dado um array <arr> de <n> elementos queremos
// encontrar um dado elemento <x>.

function search(arr, n, x){
  let i;
  for (i = 0; i < n; i++) if(arr[i] == x) return i;
  return -1;
}
          
arr = [10, 20, 30, 40, 50];
let x = 30;
let n = arr.length;
let result = search(arr, n, x);
result === -1
            ? console.log("Elemento não está presente.")
            : console.log("Elemento presente na posição " + result);`,
    inserir: `// Dado um array <arr> e uma posição <i> 
// insirir um elemento nessa posição.

let arr = [10, 20, 30, 40]
let i = 2
arr.splice(i, 0, 80)
console.log(arr)
`,
    deletar: `// Dado um array <arr> e uma posição <i> remover o 
// elemento após essa posição.

let arr = [10, 20, 30, 40]
let i = 2
arr.splice(i, 1)
console.log(arr)`,
    teoria: "array_teoria",
    resposta: [
      "30",
      "Elemento presente na posição 2",
      "[10, 20, 80, 30, 40]",
      "[10, 20, 40]",
    ],
  },
  sll: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "sll_teoria",
    resposta: "30",
  },
  stack: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "stack_teoria",
    resposta: "30",
  },
};

export default api;
