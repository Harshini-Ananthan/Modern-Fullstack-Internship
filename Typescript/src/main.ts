export {}
//this file is treated as a private file, variable namess in other file won't 
// affect this


let age:number = 19;
//age = "Hello";

console.log(age);

let name:string = "Harsh";
console.log(name);

let flag:boolean = true;
console.log(flag);

let price:number = 10.95;
console.log(price);

const arr1:number[] = [10, 20, 30];
console.log("arr1: ",arr1);

// arr1.push("App");
// console.log(arr1);


//READONLY - does not let you modify the array - NOT FOR PRIMITIVE TYPES
const city : readonly string[] = ["Chennai", "Coimbatore"];
//city.push("Trichy");
console.log(city);

const matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

//any type- allows to store any type. PROBLEM: IT BREAKS TYPE SAFETY (toUpperCase()
//It will bypass type checking, so no errors are caught during compile time.

let x:any = 10;
x = "Harsh";
console.log(x);