/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
'use strict'

function isEven(num) {
    if (typeof num !== 'number') {
        throw new Error('is not a number');
    }

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true

//console.log(isEven('2')); //error

exports.isEven = isEven;