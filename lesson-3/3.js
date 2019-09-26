/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
'use strict'
function truncate(string, maxLength){
    //check if valid parametrs types
    if (typeof string == "string" && typeof maxLength == "number"){
        //compare params length
        if (string.length > maxLength){
            let result = string.substring(0,maxLength-3)+'...';
            console.log(result);
            return result;
        } else {
            console.log(string);
            return string;
        }
    } else {
        console.log('Use first "string", second "number" parametrs only!!!');
        return false;
    }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

/*
//more tests
truncate('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 4); // L...
truncate('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 73); // Lorem Ipsum is simply dummy text of the printing and typesetting industry
truncate(4, 3); // Use first "string", second "number" parametrs only!!!
truncate(4, '3'); // Use first "string", second "number" parametrs only!!!
*/

exports.truncate = truncate;
