'use strict';

for (var i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log('%d - это ноль', i);
        continue;
    }
    if ((i % 2) == 0) {
        console.log('%d - четное число', i);
        continue;
    } else {
        console.log('%d - нечетное число', i);
        continue;
    }
}
