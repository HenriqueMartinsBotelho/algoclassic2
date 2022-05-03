#Acessando um elemento de um array

- Complexidade de Tempo no caso médio: O(1).
- Complexidade de Tempo no pior caso: O(1).

Não importa o número de elementos no array, para acessa-lo é feita uma única multiplicação e adição.

Por baixo dos panos temos algo como: **element_memory_location = start_memory_location + (size_of_element \* index_in_array)**

##Python

```python
a = [10,20,30,40]
print(a[2])
# Output: 30
```

##JavaScript

```javascript
let a = [10, 20, 30, 40];
console.log(a[2]);
// Saída: 30
```

<!-- <iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/UmX4kyB2wfg"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>

![logo](https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg)

a
![logo](http://localhost:3000/img/aaa.png) -->

<!-- b
![logo](/static/media/aaa.c52690fbe8a39bb420c7.png)
c
![logo](https://algoclassic2.vercel.app/img/aaa.png) -->
