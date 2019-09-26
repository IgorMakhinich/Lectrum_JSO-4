/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

// Решение
'use strict'
function extractCurrencyValue(source){
    //check param type
    if (typeof source == "string"){
        let result = Number(source.substring(1));
        /*check type
        //console.log(typeof result);
        */
        console.log(result);
        return result;
    } else {
        console.log('Use only string parametr!!!');
        return null;
    }
}

extractCurrencyValue(PRICE); // 120

/*
//more tests
extractCurrencyValue(120); // Use only string parametr!!!
extractCurrencyValue('₴120'); // 120
*/

exports.extractCurrencyValue = extractCurrencyValue;