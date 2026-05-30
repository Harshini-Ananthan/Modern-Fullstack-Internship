const nums = [1,2,3,4,5,6,7,8,9,10];
 
//filter even numbers
const result = nums.filter((elem) => {
    if(elem%2 === 0)
        return elem;
})

console.log(result);

const arr = [
    {
        name : "Harsh",
        age : 19
    },
    {
        name : "Madhu",
        age : 15
    },
    {
        name : "Mathu",
        age : 18
    }
];

const ans = arr.filter((elem) => {
    return elem.age >=18;
})
console.log(ans);