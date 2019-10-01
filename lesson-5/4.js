/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение
'use strict'

function f(day) {
    if (typeof day !== 'number') {
        throw new Error('is not a number type');
    }

    if (day < 1 || day > 7) {
        throw new Error('use numbers in interval from 1 to 7')
    }

    switch (day) {
        case 1:
            return 'Воскресенье';
            break;
        case 2:
            return 'Понедельник';
            break;
        case 3:
            return 'Вторник';
            break;
        case 4:
            return 'Среда';
        case 5:
            return 'Четверг';
            break;
        case 6:
            return 'Пятница';
            break;
        case 7:
            return 'Суббота';
            break
    }
};

console.log(f(1)); // Воскресенье
console.log(f(4)); // Среда
console.log(f(7)); // Суббота

//console.log(f('1')); //error 'is not a number type'
//console.log(f(0)); //error 'use numbers in interval from 1 to 7'
//console.log(f(8)); //error 'use numbers in interval from 1 to 7'

exports.f = f;