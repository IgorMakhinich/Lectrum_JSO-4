/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

const validateArr = (array) => {
    if (!Array.isArray(array)) {
        throw new Error(`argument ${array} is not array!`);
    }
}

const validateFunc = (func) => {
    if (typeof func !== 'function') {
        throw new Error(`argument ${func} is not a function!`);
    }
}

const some = (array, cb) => {
    let out = false;

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            out = true;
        }
    }
    return out;
}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;