# Busca em array

Um dos métodos que podem ser usados para encontrar um elemento em um array é o Linear Search.

- Complexidade de Tempo no caso médio: O(n).
- Complexidade de Tempo no pior caso: O(n).
- Complexidade de Espaço: O(n).

## Implementações

Dado um array **arr** de **n** elementos queremos encontrar um dado elemento **x** nele.

---

### 1) Python

```python
def linear_search(arr, n, x):

    for i in range(0, n):
        if (arr[i] == x):
            return i
    return -1

arr = [10, 20, 30, 40, 50]
x = 30
n = len(arr)
result = linear_search(arr, n, x)
if(result == -1):
    print("Element is not present in array")
else:
    print("Element is present at index", result)
```

---

### 2) JavaScript

```javascript
function search(arr, n, x) {
  let i;
  for (i = 0; i < n; i++) if (arr[i] == x) return i;
  return -1;
}

arr = [10, 20, 30, 40, 50];
let x = 30;
let n = arr.length;
let result = search(arr, n, x);
result == -1
  ? document.write("Element is not present in array")
  : document.write("Element is present at index " + result);
```

---

### 3) C++

```cpp
#include <iostream>
using namespace std;

int search(int arr[], int n, int x){
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

int main(void){
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = search(arr, n, x);
    (result == -1)
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}
```

### Referências

[https://www.geeksforgeeks.org/linear-search/](https://www.geeksforgeeks.org/linear-search/)
