/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

function createFibonacciGenerator() {
    let arr = [];
    let current = null;
    return () => {
        if (arr.length === 0 || arr.length === 1) {
            arr.push(1);
            return arr[arr.length - 1];
        }
        current = arr.slice(-2).reduce((accumulator, currentValue) => accumulator + currentValue);
        arr.push(current);
        return current;
    }
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;