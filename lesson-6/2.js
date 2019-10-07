/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

const filter = (array, cb) => {
    const arrOut = [];

    validateArr(array);
    validateFunc(cb);

    for (let i = 0; i < array.length; i++) {
        /*
        //check callback return status
        console.log(`${array[i]} : ${cb(array[i], i , array)}`);
        */
        if (cb(array[i], i, array)) {
            arrOut.push(array[i]);
        }
    }
    return arrOut;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;