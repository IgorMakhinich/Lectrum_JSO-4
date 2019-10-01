/**
 * Задача 8.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
'use strict'

function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`is not an array`);
    }
    if (arr.length === 0) {
        throw new Error('array should not be empty');
    }

    console.log(arr.splice(0, 1)[0]);

    if (arr.length === 1) {
        console.log(arr[0]);
    } else {
        f(arr);
    }

}

f([1, 2, 3]);
// 1
// 2
// 3

//f('123'); //error `is not an array`
//f([]); //error `array should not be empty`
//f([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

exports.f = f;