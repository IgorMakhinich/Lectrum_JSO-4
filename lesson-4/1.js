/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение 
Object.defineProperty(person, 'salary', {
    get() {
        const today = new Date;
        const month = today.getMonth();
        const year = today.getFullYear();
        //get the last date of previous month by 0; for current month use+1 → got amount of days
        const dayAmount = new Date(year, month + 1, 0).getDate();
        //check daysAmount
        console.log(`there are ${dayAmount} days in this month`);
        if (dayAmount - today.getDate() > 20) {
            console.log(`good salary`);
            return `good salary`;
        } else {
            console.log(`bad salary`);
            return `bad salary`;
        }
    }
});

person.salary; // good salary

exports.person = person;