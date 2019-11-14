/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
'use strict'
const checkParams = (arg) => {
    if (arg.length !== 3) {
        throw new Error('function "postpone" must accept only 3 parameters!!!');
    }
}

const checkNum = (arg) => {
    const arr = Array.from(arg);
    if (arr.some(elem => typeof (elem) !== 'number')) {
        throw new Error('function "postpone" must accept only numbers');
    }
}

const lessMore = (start, end, delay) => {
    for (let i = start; i <= end; i++) {
        setTimeout(() => {
            console.log(i);
        }, delay * i);
    }
}

const moreLess = (start, end, delay) => {
    const rootCount = start * delay;
    for (let i = start; i >= end; i--) {
        let currentCount = rootCount - (i * delay - delay);
        setTimeout(() => {
            console.log(i);
        }, currentCount);
    }
}

function postpone(start, end, delay) {
    checkParams(arguments);
    checkNum(arguments);

    if (start > end) {
        moreLess(start, end, delay);
    } else {
        lessMore(start, end, delay);
    }
}

//postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;