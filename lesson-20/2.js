/** 
# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
*/
'use strict';
// Решение
class Customers {
    constructor(){
        this.customersArray = [];
    }

    add(customer){
        if (typeof customer !== 'object'){
            throw new Error(`${customer} is not an Object`);
        }
        if (!customer.name){
            throw new Error(`${customer} requires field "name"`);
        }
        this.customersArray.push(customer);
    }

    *[Symbol.iterator]() {
        const verifiedArray = this.customersArray.filter(customer => customer.verified);
        for (const item of verifiedArray) {
            yield item;
        }
    }
}

// Пример использования
const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

