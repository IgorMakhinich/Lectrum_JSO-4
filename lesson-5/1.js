/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение
'use strict'

function f(num) {
    if (typeof num === 'number') {
        return Math.pow(num, 3);
    } else {
        throw new Error('is not a number type');
    }
}

console.log(f(2)); // 8
console.log(f(3)); // 27
//console.log(f('abc')); //error 'is not a number type'

exports.f = f;