/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
'use strict'
function upperCaseFirst(string){
    //check if param is string
    if (typeof string == 'string'){
        //if string is not empty
        if (!string == ''){
            let result = string.charAt(0).toUpperCase() + string.substring(1);
            console.log(result);
            return result;
        } else {
        console.log(string);
        return string;
        }           
    } else {
        console.log('Use only "string" parametr!!!');
        return false;
    }        
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''


// more test
upperCaseFirst(123); // Use only "string" parametr!!!
upperCaseFirst('abc'); // Abc



exports.upperCaseFirst = upperCaseFirst;
