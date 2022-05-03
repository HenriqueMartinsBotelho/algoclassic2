#Array Insertion

- Complexidade de Tempo no caso médio: O(n).
- Complexidade de Tempo no pior caso: O(n).

A lógica é que todos os elementos do array devem ser deslocados um índice para cima após a inserção, ou todos os elementos devem ser copiados para um novo array grande o suficiente para conter o elemento inserido.

## Implementações

---

### C

```c
#include <stdio.h>

main() {
   int array[] = {1,3,5,7,8};
   int item = 10, k = 3, n = 5;
   int i = 0, j = n;

   n = n + 1;

   while( j >= k) {
      array[j+1] = array[j];
      j = j - 1;
   }

   array[k] = item;

   printf("The array elements after insertion :\n");

   for(i = 0; i<n; i++) {
      printf("array[%d] = %d \n", i, array[i]);
   }
}
```

---

### Python

```python
array = [10, 20, 30]
array.insert(1, 40)
print(array) # [10, 40, 20, 30]
```

---

### Javascript

```javascript
let array = [10, 20, 30];
array.splice(1, 0, 40);
console.log(array); // [10, 40, 20, 30]
```

---
