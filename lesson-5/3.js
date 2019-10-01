/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
'use strict'

function f(first, second, third) {
    if (typeof first === 'number' && typeof second === 'number' && typeof third === 'number') {
        return (first - second) / third;
    } else {
        throw new Error('is not a number type');
    }
}

console.log(f(9, 3, 2)); // 3
console.log(f(50, 20, 3)); //10

//console.log(f('a', 10, 2)); //error 'is not a number type'

exports.f = f;