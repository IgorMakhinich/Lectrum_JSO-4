const arr = [1, 2 ,3 ,4 ,5 ,6];
let result = [];
let i = arr.length - 1
let j = 0;

for (let i = arr.length - 1; i >= 0; i--){
    result[j] = arr[i];
    j++;
}
console.log(result);