// var string = "Hello";
// console.log(string);

// var string = "World";
// console.log(string);

// let name = "Harshini";
// console.log(name);
// // let name = "Ananthan"; // Syntax Error

// const num = 100;
// // num = 200;
// console.log(num);
// // Syntax error - while re-declaring
// // Type error - while re-assigning

// let nums = [1,2,3,4,5];
// nums = 12.234
// nums = "String";
// nums = {
//     name : "Harsh",
//     age : 20
// }
// console.log(nums);

// //Function declaration
// // function multiply(a,b){
// //     console.log(a*b);
// // }

// // //function expression
// // const mul = function(a,b){
// //     console.log(a*b);
// // }

// // //arrow functions
// // const multiply1 = (a,b) => {
// //     console.log(a*b);
// // }

// //anonymous function
// // function (a,b){
// //     console.log(a*b);
// // }

// //Nested object
// let student = {
//     name: "Harsh",
//     age : 20,
//     hasGraduate: false,
//     branch: "CSE",
//     marks: [80, 60, 70, 90],
//     adress: {
//         street: "Raja Street",
//         city: "Kinathukadavu"
//     },
//     phoneNo : "9894725778"
// }

// console.log(student);
// console.log(student.marks[2]);



//  GLOBAL EXECUTION CONTEXT
var a= 10;
var b= 20;
const add = (a,b) => {
    const ans = a+b;
    return ans;
}
const output = add(a,b);
console.log(output);