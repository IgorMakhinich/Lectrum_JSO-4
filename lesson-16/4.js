/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
'use strict'
class Stringer {
    reverse(string) {
        const result = string.split('').reverse().join('');
        return result;
    }
    uppercaseFirst(string) {
        const result = string.charAt(0).toUpperCase() + string.substring(1);
        return result;
    }
    uppercaseAll(string) {
        const strSplit = string.split(' ');
        const upper = strSplit.map((item) => this.uppercaseFirst(item));
        return upper.join(' ');
    }

}


const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;