/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение
const toString = Object.prototype.toString;

const validFunc = (func) => {
    if (typeof func !== 'function') {
        throw new Error(`argument ${func} is not a function!`)
    }
}
const validObj = (obj) => {
    const toString = Object.prototype.toString;
    if (Array.isArray(obj) || toString.call(obj) !== '[object Object]') {
        throw new Error(`argument ${obj} is not an object!`)
    }
}

function bind(func, obj, ...params) {
    validFunc(func);
    validObj(obj);

    const result = () => {
        return func.apply(obj, params);
    }
    return result;
}

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = {
    name: 'Walter',
    getName
};
const oliver = {
    name: 'Oliver'
};

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;