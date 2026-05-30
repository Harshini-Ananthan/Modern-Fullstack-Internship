const nums = [1, 2, 3, 4, 5];

const updatedArray = nums.map((elem, idx, nums) => {
    console.log(`Element: ${elem}, Index: ${idx}, Array: ${nums}`);
    return elem*2;
})

console.log(updatedArray);
console.log(nums);

const user = [
    {
        id:1,
        name:"Madhu",
        age:19,
        phone:9659013590
    },
    {
        id:2,
        name:"Harsh",
        age:20,
        phone:9361159306
    },
    {
        id:3,
        name:"Mathu",
        age:15,
        phone:975127212
    }
]

const updatedUser = user.map((users) => {
    return users.name;
})
console.log(updatedUser);

const newUser = user.map((users) => {
    return { ...users, canVote : users.age >= 18}
})

console.log(newUser);