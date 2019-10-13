/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const validateArgs = (val, numOfEl) => {
    const types = ['number', 'string', 'object'];
    if (types.indexOf(typeof val) === -1) {
        throw new Error('first parametr should be: number, or string, or object, or array');
    }
    if (typeof numOfEl !== 'number') {
        throw new Error('second parametr should be a number');
    }
}

const createArray = (val, numOfEl) => {
    validateArgs(val, numOfEl);

    const result = new Array(numOfEl);
    result.fill(val);
    return result;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;