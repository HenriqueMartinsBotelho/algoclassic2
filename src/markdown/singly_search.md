# Singly Linked List Search

<!-- ![logo](http://localhost:3000/img/singly_list_search.PNG) -->

- Complexidade de Tempo no caso médio: O(n).
- Complexidade de Tempo no pior caso: O(n).

#Implementações

Dado uma SLL e um valor queremos determinar se ele existe na lista. Se existir retornamos 1 e caso contrário -1.

### JavaScript

![singly_list_js_search](http://localhost:3000/img/singly_list_js_search.PNG)

---

### C

```c

#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *next;
};

void addLast(struct node **head, int val){
    //create a new node
    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = val;
    newNode->next     = NULL;

    //if head is NULL, it is an empty list
    if(*head == NULL)
         *head = newNode;
    //Otherwise, find the last node and add the newNode
    else{
        struct node *lastNode = *head;

        //last node's next address will be NULL.
        while(lastNode->next != NULL){
            lastNode = lastNode->next;
        }

        //add the newNode at the end of the linked list
        lastNode->next = newNode;
    }

}

int searchNode(struct node *head,int key){
    struct node *temp = head;

    //iterate the entire linked list and print the data
    while(temp != NULL){
         //key found return 1.
         if(temp->data == key)
             return 1;
         temp = temp->next;
    }
    //key not found
    return -1;
}

int main(){
     struct node *head = NULL;

     addLast(&head,10);
     addLast(&head,20);
     addLast(&head,30);

     //change the key and try it yourself.
     if(searchNode(head,20) == 1)
         printf("Search Found\n");
     else
         printf("Search Not Found\n");

     return 0;
}
```
