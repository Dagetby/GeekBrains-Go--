"use strict";
//пример 1
let a = 1, b = 1, c, d;
let c = ++a; // здесь "a" неявно увеличивается(унарно) на 1 c =  a + 1
alert(c); // ответ: 2

//пример 2
let d = b++; // "b" также неявно увеличится(уенарно), но только уже после 7 строкчки
alert(d); //ответ: 1

//пример 3
let c = 2 + ++a; // "a" = 2, также происходит неявное увеличение переменной "a" c = 2 + a + 1
alert(c); //ответ: 5

//пример 4
let d = 2 + b++; /* так как "b" увеличелось на 8 строчке, получается что сейчас "b" = 2, но
на 17 строчке уже будет равно 3 */
alert(d); //ответ: 4
alert(a); //3 "a" увеличилось на 1 дважды на 3 и 11 строчке
alert(b); //3 обьяснение на 15 строчке
