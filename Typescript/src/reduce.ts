// REDUCE -> returns a single value by performing an operation on the array

const nums = [1,2,3,4,5];

const sum = nums.reduce((accumulator, elem) => {
    return accumulator + elem;
}, 0);

console.log("Sum: ", sum);