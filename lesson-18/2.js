/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
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

const validateQuery = (obj) => {
    if (typeof obj !== 'object') {
        throw new TypeError(`${obj} should be an Object`);
    }
    if (obj.name && typeof obj.name !== 'string') {
        throw new TypeError(`${obj} property name should be a String`);
    }
    if (obj.age && typeof obj.age !== 'object') {
        throw new TypeError(`${obj} property age should be an Object`);
    };
    if (obj.country && typeof obj.country !== 'string') {
        throw new TypeError(`${obj} property country should be a String`);
    }
    if (obj.salary && typeof obj.salary !== 'object') {
        throw new TypeError(`${obj} property salary should be an Object`);
    };
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
            throw new Error(`.read expects id as a String`);
        }
        if (!this.db.has(id)) {
            return null;
        }
        const thisUSer = this.db.get(id);
        const result = {
            ...thisUSer,
            id
        };
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
            throw new Error(`.delete expects id as a String`);
        }
        if (!this.db.has(id)) {
            throw new Error(`${id} is not set, use valid id`);
        }
        return this.db.delete(id);
    }
    //find
    find(query) {
        let result = [];
        validateQuery(query);
        for (let [key, value] of this.db.entries()) {
            const user = {
                ...value
            };
            //name|country
            if (query.name && query.country) {
                if (user.name === query.name && user.country === query.country) {
                    result.push(user);
                }
            } else if (query.name && !query.country) {
                if (user.name === query.name) {
                    result.push(user);
                }
            } else if (!query.name && query.country) {
                if (user.country === query.country) {
                    result.push(user);
                }
            } else {
                result.push(user);
            };
            //age
            if (query.age) {
                if (query.age.min && query.age.max) {
                    result = result.filter((user) => user.age >= query.age.min && user.age <= query.age.max);
                } else if (query.age.min && !query.age.max) {
                    result = result.filter((user) => user.age >= query.age.min);
                } else if (!query.age.min && query.age.max) {
                    result = result.filter((user) => user.age <= query.age.max);
                }
            }
            //salary
            if (query.salary) {
                if (query.salary.min && query.salary.max) {
                    result = result.filter((user) => user.salary >= query.salary.min && user.salary <= query.salary.max);
                } else if (query.salary.min && !query.salary.max) {
                    result = result.filter((user) => user.salary >= query.salary.min);
                } else if (!query.salary.min && query.salary.max) {
                    result = result.filter((user) => user.salary <= query.salary.max);
                }
            }
        }
        //console.log(result);
        return result;
    }
}

const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};
const person1 = {
    name: "John", // обязательное поле с типом string
    age: 32, // обязательное поле с типом number
    country: "ru", // обязательное поле с типом string
    salary: 1000 // обязательное поле с типом number
};
const id = db.create(person);
const id1 = db.create(person1);
const customersAll = db.readAll();
//console.log(customersAll);

// Проверка
const query = {
    country: "ua",
    age: {
        min: 20
    },
    salary: {
        min: 300,
        max: 1600
    }
};

const customers = db.find(query); // массив пользователей

//console.log(customers);