/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение
Object.defineProperties(person, {
    //configurable:false,enumerable:false,value:undefined by default
    rate: {
        writable: true,
    },
    //configurable:false,enumerable:false,value:undefined,writable:false by default
    salary: {
        get() {
            const today = new Date;
            const todayDate = today.getDate();
            const pRate = person.rate || 0;
            const salaryResult = pRate * todayDate;
            console.log(salaryResult);
            return salaryResult;
        }
    }
});

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;