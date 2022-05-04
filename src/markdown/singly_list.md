# Single Linked List

Uma lista encadeada é composta por uma série linear de nós (para arranjos não lineares de nós, veja Árvores e Grafos).

Esses nós, diferentemente dos elementos em uma matriz, não precisam estar localizados próximos uns dos outros na memória para serem acessados.

A razão é que cada nó contém um link para outro nó.

![logo](http://localhost:3000/img/singly_list.PNG)

#Implementação

### C

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
  //node structure
  struct node
  {
      int data;
      struct node *next;
  };

  //declaring nodes
  struct node *head,*middle,*last;

  //allocating memory for each node
  head   = malloc(sizeof(struct node));
  middle = malloc(sizeof(struct node));
  last   = malloc(sizeof(struct node));

  //assigning values to each node
  head->data   = 10;
  middle->data = 20;
  last->data   = 30;

  //connecting each nodes. head->middle->last
  head->next   = middle;
  middle->next = last;
  last->next   = NULL;

  //temp is a reference for head pointer.
  struct node *temp = head;

  //till the node becomes null, printing each nodes data
  while(temp != NULL)
  {
      printf("%d->",temp->data);
      temp = temp->next;
  }
  printf("NULL");

  return 0;
}
```

---

### JavaScript

![logo](http://localhost:3000/img/singly_list_js.PNG)

### Imprimindo a Lista

```javascript
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};
```

### Imprimindo a Lista recursivamente

```javascript
const printLinkedListRecursive = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedListRecursive(head.next);
};
```

#### Fontes:

- [https://en.wikiversity.org/wiki/Data_Structures_and_Algorithms/Arrays,\_Lists_and_Vectors](https://en.wikiversity.org/wiki/Data_Structures_and_Algorithms/Arrays,_Lists_and_Vectors)

- [https://www.geeksforgeeks.org/difference-between-a-static-queue-and-a-singly-linked-list/](https://www.geeksforgeeks.org/difference-between-a-static-queue-and-a-singly-linked-list/)
