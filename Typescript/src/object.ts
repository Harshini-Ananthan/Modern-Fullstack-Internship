let obj = {
    name: "Harsh",
    id: 1
}
console.log(obj);

type student  = {
    name: string,
    age: number,
    marks: number[],
    isPassed ?: boolean
};

const student1 : student = {
    name: "Harsh",
    age : 19,
    marks : [90, 80, 95],
    //isPassed : true
};

console.log(student1);

interface Car{
    model : string,
    brand : string,
    price : number,
    color : string
}
const car1: Car =  {
    model : "Rapid",
    brand : "Skoda",
    price : 1000000,
    color : "silver"
}
console.log(car1);

interface Doctor{
    name : string,
    age : number,
    salary : number,
    Department : string
}

const doctor1 : Doctor = {
    name : "Sowndar",
    age : 25,
    salary : 100000,
    Department : "Emergency Medicine"
}
console.log(doctor1);