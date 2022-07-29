const breakLine = `<br/>\n\n`;

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
      `30`,
      "Elemento presente na posição 2",
      "[10, 20, 80, 30, 40]",
      "[10, 20, 40]",
    ],
  },
  sll: {
    acessar: `class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
    
a.next = b
b.next = c
c.next = d

const getNth = (head, index) => {
  let current = head
  let count = 0
  while(current != null){
      if(count === index) {
          return current
      }
      count++
      current = current.next 
  }
  return -1;
}
  
const element = getNth(a,2)
console.log(element.val)`,
    buscar: `class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
    
a.next = b
b.next = c
c.next = d
  
const searchElement = (head, val) => {
  let current = head
  while (current != null){
    if(current.val === val) return true
    current = current.next
  }
  return false
}
 
console.log(searchElement(a, 'B'))
console.log(searchElement(a, 'E'))
`,
    inserir: `class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
    
a.next = b
b.next = c
c.next = d
  
const insertAtHead = (head, val) => {
  let newNode = new Node(val)
  if(!head){
    head = newNode
    return head
  }else{
    newNode.next = head
    head = newNode
  }
  return head
}

const printLinkedList = (head) => {
    let current = head
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}

let newList = insertAtHead(a, 30)
printLinkedList(newList)`,
    deletar: `class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}
let head = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
    
head.next = b
b.next = c
c.next = d
  
head = b
   
const printLinkedList = (head) => {
    let current = head
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}
  
printLinkedList(head)`,
    teoria: "sll_teoria",
    resposta: [
      "C",
      "true<br/>false",
      `30 <br/> A <br/> B <br/> C <br/>D`,
      "B<br/>C<br/>D",
    ],
  },
  dll: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "dll_teoria",
    resposta: "30",
  },
  queue: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "queue_teoria",
    resposta: "30",
  },
  skip: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "skip_teoria",
    resposta: "30",
  },
  hash: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "hash_teoria",
    resposta: "30",
  },
  bst: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "bst_teoria",
    resposta: "30",
  },
  ct: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "ct_teoria",
    resposta: "30",
  },
  bt: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "bt_teoria",
    resposta: "30",
  },
  rbt: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "rbt_teoria",
    resposta: "30",
  },
  st: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "st_teoria",
    resposta: "30",
  },
  avl: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "avl_teoria",
    resposta: "30",
  },
  kt: {
    acessar: "ee",
    buscar: "ff",
    inserir: "gg",
    deletar: "hh",
    teoria: "kt_teoria",
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
