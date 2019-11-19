/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/
'use strict'
// Решение
const validateObj = (obj) => {
    const reqProps = ['name', 'age', 'country', 'salary'];
    if (typeof obj !== 'object') {
        throw new TypeError(`${obj} should be an Object`);
    }
    const properties = reqProps.every(item => obj.hasOwnProperty(item));
    if (!properties) {
        throw new Error(`${obj} should contain required properties: name, age, country, salary`);
    }
    if (typeof obj.name !== 'string') {
        throw new TypeError(`${obj} property name should be a String`);
    }
    if (typeof obj.age !== 'number') {
        throw new TypeError(`${obj} property age should be a Number`);
    }
    if (typeof obj.country !== 'string') {
        throw new TypeError(`${obj} property country should be a String`);
    }
    if (typeof obj.salary !== 'number') {
        throw new TypeError(`${obj} property salary should be a Number`);
    }
}

const validateVal = (obj) => {
    if (typeof obj !== 'object') {
        throw new TypeError(`${obj} should be an Object`);
    }
    switch (Object.keys(obj)[0]) {
        case 'name':
            if (typeof obj.name !== 'string') {
                throw new TypeError(`${obj} property name should be a String`);
            };
            break;
        case 'age':
            if (typeof obj.age !== 'number') {
                throw new TypeError(`${obj} property age should be a Number`);
            };
            break;
        case 'country':
            if (typeof obj.country !== 'string') {
                throw new TypeError(`${obj} property country should be a String`);
            };
            break;
        case 'salary':
            if (typeof obj.salary !== 'number') {
                throw new TypeError(`${obj} property salary should be a Number`);
            };
            break;
    }
}

class DB {
    constructor() {
        this.db = new Map();
    }
    //create
    create(user) {
        validateObj(user);
        const id = Math.floor(Math.random() * 1E10).toString();
        this.db.set(id, user);
        return id;
    }
    //read
    read(id) {
        if (id === undefined || typeof id !== 'string') {
            throw new Error(`.read expects id as string`);
        }
        if (!this.db.has(id)) {
            return null;
        }
        const thisUSer = this.db.get(id);
        const result = {
            ...thisUSer,
            id
        }
        return result;
    }
    //readAll
    readAll() {
        if (arguments.length !== 0) {
            throw new Error(".readAll does not expects arguments");
        }
        const allUsers = [];
        this.db.forEach((user) => allUsers.push(user));
        return allUsers;
    }
    //update
    update(id, param) {
        if (arguments.length !== 2) {
            throw new Error(".update expects 2 arguments");
        }
        if (!this.db.has(id)) {
            throw new Error(`${id} is not set, use valid id`);
        }
        if (typeof id !== 'string') {
            throw new TypeError(`${id} should be a String`);
        }
        validateVal(param);
        const user = this.db.get(id);
        const userUpdate = {
            ...user,
            ...param
        };
        this.db.set(id, userUpdate);
        return id;
    }
    //delete
    delete(id) {
        if (id === undefined || typeof id !== 'string') {
            throw new Error(`.delete expects id as String`);
        }
        if (!this.db.has(id)) {
            throw new Error(`${id} is not set, use valid id`);
        }
        return this.db.delete(id);
    }
}
// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, {
    age: 22
}); // id
//console.log(db.read(id));
db.delete(id); // true