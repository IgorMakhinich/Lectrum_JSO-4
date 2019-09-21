const array = [2, -1, -3, 15, 0, 4];
let result = null;

for (let i = 0; i < array.length; i++){
    if (array[i] > 0){
        result += array[i];
    }
}
console.log(result);