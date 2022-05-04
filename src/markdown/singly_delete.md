# Singly Linked List Deletion

Se você deseja excluir um elemento específico, a complexidade de tempo é O(n) (onde n é o número de elementos) porque você precisa encontrar o elemento primeiro.

Se você deseja excluir um elemento em um índice específico i, a complexidade de tempo é O(i) porque você precisa seguir os links desde o início.

A complexidade de tempo de inserção é apenas O(1) se você já tiver uma referência ao nó que deseja inserir depois. A complexidade de tempo para remoção é apenas O(1) para uma lista duplamente vinculada se você já tiver uma referência ao nó que deseja remover. A remoção de uma lista encadeada somente é O(1) se você já tiver referências ao nó que deseja remover e ao anterior. Tudo isso contrasta com uma lista baseada em array onde inserções e remoções são O(n) porque você tem que deslocar os elementos junto.

A vantagem de usar uma lista vinculada em vez de uma lista baseada em uma matriz é que você pode inserir ou remover elementos com eficiência enquanto itera sobre ela. Isso significa, por exemplo, que filtrar uma lista vinculada é mais eficiente do que filtrar uma lista com base em uma matriz.

### JavaScript deletar o primeiro nó em O(1).

![singly_list_js_access](http://localhost:3000/img/singly_list_js_insert.PNG)

#### todo: fazer delete em O(1) e O(n) em qualquer posição
