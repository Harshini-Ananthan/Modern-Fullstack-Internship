let arr1: [string, number, boolean];

arr1 = ["Harsh", 21, false];
console.log(arr1[1]);

// arr1 = ["Harsh", false, 21];  // NOT ALLOWED
// console.log(arr1[1]);

//---------------------UNION-------------------
type ID = string | number;
let id2: ID = "abc123";
console.log(id2);
let id1: ID = "123";
console.log(id1);

let id : string | number;
id = "abc123";
console.log(id);
id = "123";
console.log(id);

//-----------------INTERSECTION------------
type Person = {
    name : string,
    age :number
}

type Employee = {
    salary : number,
    employeeId : number
}

type staff = Person & Employee;
const worker : staff = {
    name : "Harsh",
    age : 19,
    salary : 1000000,
    employeeId : 101
};

console.log(worker);
