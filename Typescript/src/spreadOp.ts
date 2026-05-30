const num1 : number[] = [1,2,3];
const num2 : number[] = [4,5,6];

console.log([...num1, ...num2]); // [1,2,3,4,5,6]

console.log([num1, ...num2]); // [[1,2,3], 4,5,6]