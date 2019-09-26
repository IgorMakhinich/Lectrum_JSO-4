/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
'use strict'
function checkSpam(source, example){
    //check if params are strings
    if (typeof source == 'string' && typeof example == 'string'){
        //check if includes by case insensitive params
        if (source.toLowerCase().includes(example.toLowerCase())){
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    } else {
        console.log('Use only "string" parametrs!!!');
        return false;
    }    
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

/*
//more test
checkSpam(`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, 'my name is Fedya'); // false
checkSpam(`Lorem Ipsum is simply dummy text my name is Fedya of the printing and typesetting industry.`, 'my name is Fedya'); // true
checkSpam(123, 123); // Use only "string" parametrs!!!
checkSpam('123', 123); // Use only "string" parametrs!!!
checkSpam(123, '123'); // Use only "string" parametrs!!!
*/

exports.checkSpam = checkSpam;