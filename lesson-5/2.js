/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
'use strict'

function f() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            res += arguments[i];
        } else {
            throw new Error('is not a number type');
        }
    }
    return res;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
console.log(f(1, 2)); //3

//console.log(f(1, 1, '1')); // error 'is not a number type'


exports.f = f;