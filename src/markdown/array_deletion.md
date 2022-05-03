# Array Deletion

- Complexidade de Tempo no caso médio: O(n).
- Complexidade de Tempo no pior caso: O(n).

---

## Vídeo explicando a operação

<iframe width="640" height="480" src="https://www.youtube.com/embed/CZYR2v8rYLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Implementações

Em Python e Javascript as funções **pop** e **splice** esconde a lógica por trás deletar mas em C podemos ver o porquê essa operação ser O(n).

### Python

```python
array = [10, 20, 30,40]
array.pop(2)
print(array) # [10, 20, 40]
```

---

### JavaScript

```javascript
let array = [10, 20, 30, 40];
array.splice(2, 1); // 2 indicates position start to delete; 1 indicates quantity
console.log(array); // [10, 20, 40]
```

---

### C

```
int main()
{
    int arr[size] = {1, 20, 5, 78, 30};
    int key, i, index = -1;

    printf("Enter element to delete\n");
    scanf("%d",&key);


    for(i = 0; i < size; i++){
        if(arr[i] == key)
        {
            index = i;
            break;
        }
    }

    if(index != -1){
        for(i = index; i < size - 1; i++)
            arr[i] = arr[i+1];

        printf("New Array : ");
        for(i = 0; i < size - 1; i++)
            printf("%d ",arr[i]);
    }
    else
        printf("Element Not Found\n");

    return 0;
}
```

---
