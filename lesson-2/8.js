const array = [1, 2, 3, 4, 5, 6];
let result = null;

for (let i = 0; i < array.length; i++){
    if (array[i] > 3 && array[i] % 2 === 0){
        result += array[i];
    }
}
console.log(result);