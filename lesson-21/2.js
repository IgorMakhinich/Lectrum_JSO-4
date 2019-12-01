/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/
'use strict';
// Решение
function getCustomers(customers, countries) {
    const customersVerified = customers.filter(customer => customer.verified);
    const isAdded = new Promise(
        (resolve, reject) => {
            const addArray = customersVerified.map(customer => {
                const countryId = countries.findIndex(elem => elem.id === customer.id);
                if (countryId !== -1) {
                    return {...customer, ...countries[countryId]};
                } else {
                    reject(`We don't have information about country for this customer: ${customer.name}`)
                }
            });
            resolve(addArray);
        }
    );
    return isAdded;
}

// Пример использования

// const customers = [
//     {
//         id: 'A1',
//         name: 'Oliver',
//         verified: true
//     },
//     {
//         id: 'A2',
//         name: 'alex'
//     }
// ];

// const countries = [
//     {
//         id: 'A1',
//         country: 'usa'
//     },
//     {
//         id: 'A2',
//         country: 'poland'
//     }
// ];

// getCustomers(customers, countries)
// .then((customers) => console.log(customers))
// .catch(error => console.log(error))

//Check with mixed countries
const customers = [{
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'Alex',
        verified: true
    },
    {
        id: 'A3',
        name: 'Shlyoma',
    },
    {
        id: 'A4',
        name: 'Borat',
        verified: true
    }
];

const countries = [{
        id: 'A4',
        country: 'Kazakhstan'
    },
    {
        id: 'A3',
        country: 'Israel'
    },
    {
        id: 'A1',
        country: 'USA'
    },
    {
        id: 'A2',
        country: 'Poland'
    },
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))