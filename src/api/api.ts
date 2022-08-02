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
    acessar: "",
    buscar: `function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DLL() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
  }
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

// Código principal

function find(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
      currNode = currNode.next;
  }
  return currNode;
}

var letters = new DLL();
letters.insert("AAA", "head");
letters.insert("BBB", "AAA");
letters.insert("CCC", "BBB");
letters.insert("DDD", "CCC");
console.log(letters.find("DDD"))`,
    inserir: `function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DLL() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
  }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
      currNode = currNode.next;
  }
  return currNode;
}

// Código principal

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}
  

var letters = new DLL();
letters.insert("AAA", "head");
letters.insert("BBB", "AAA");
letters.insert("CCC", "BBB");
letters.insert("DDD", "CCC");
letters.display();
    `,
    deletar: `function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DLL() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
  }
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}
  
function find(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
      currNode = currNode.next;
  }
  return currNode;
}

// Código principal

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
  }
}

var letters = new DLL();
letters.insert("AAA", "head");
letters.insert("BBB", "AAA");
letters.insert("CCC", "BBB");
letters.insert("DDD", "CCC");
letters.remove("BBB")
letters.display()
    `,
    teoria: "dll_teoria",
    resposta: [
      "",
      `Node {element: "DDD", next: null, previous: Node, constructor: Object}`,
      `AAA <br/>
    BBB <br/>
    CCC <br/>
    DDD`,
      `AAA <br/> 
      CCC <br/>
      DDD `,
    ],
  },
  queue: {
    acessar: `const queue = []

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue[2])
`,
    buscar: `const queue = []

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue.includes(2))
`,
    inserir: `const queue = []

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue)`,
    deletar: `const queue = []

queue.push(1)
queue.push(2)
queue.push(3)
queue.shift()

console.log(queue)
    `,
    teoria: "queue_teoria",
    resposta: ["3", "true", `[1,  2, 3]`, `[2,3]`],
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
    acessar: "",
    buscar: `function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}


function find(data) {
  var current = this.root;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.find = find;
}

// Código principal

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

var nums = new BST();
nums.insert(33);
nums.insert(42);
nums.insert(14);
nums.insert(31);
nums.insert(2);
nums.insert(70);
nums.insert(18);

console.log(nums.find(42))`,
    inserir: `function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
  console.log(node.show() + " ");
  preOrder(node.left);
  preOrder(node.right);
  }
  }

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

var nums = new BST();
nums.insert(33);
nums.insert(42);
nums.insert(14);
nums.insert(31);
nums.insert(2);
nums.insert(70);
nums.insert(18);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("PreOrder traversal: ");
preOrder(nums.root);
    `,
    deletar: `function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function getSmallest(node) {
  if (node.left == null) {
    return node;
  } else {
    return getSmallest(node.left);
  }
}

function remove(data) {
  const root = removeNode(this.root, data);
}
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.remove = remove;
  this.inOrder = inOrder;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

var nums = new BST();
nums.insert(33);
nums.insert(42);
nums.insert(14);
nums.insert(31);
nums.insert(2);
nums.insert(70);
nums.insert(18);

nums.remove(2);

console.log("Inorder traversal: ");
inOrder(nums.root);`,
    teoria: "bst_teoria",
    resposta: [
      "",
      `Node {data: 42, left: null, right: Node, show: ƒ show(), constructor: Object}
      `,
      `Inorder traversal: <br/> 
    2  <br/>
    14  <br/>
    18  <br/>
    31  <br/>
    33  <br/>
    42  <br/>
    70  <br/>
    PreOrder traversal:<br/>  
    33  <br/>
    14  <br/>
    2  <br/>
    31  <br/>
    18  <br/>
    42  <br/>
    70  `,
      `
      Inorder traversal:  <br/> 
      14  <br/> 
      18  <br/> 
      31  <br/> 
      33  <br/> 
      42  <br/> 
      70`,
    ],
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
    acessar: `const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack[2])
`,
    buscar: `const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.includes(2))
`,
    inserir: `const stack = []

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)`,
    deletar: `const stack = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()

console.log(stack)
    `,
    teoria: "stack_teoria",
    resposta: ["3", "true", `[1,  2, 3]`, `[1,2]`],
  },
};

export default api;
