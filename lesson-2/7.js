const array = [1, 2, 3, 4];
let result = null;

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        result += array[i];
    }
}
console.log(result);