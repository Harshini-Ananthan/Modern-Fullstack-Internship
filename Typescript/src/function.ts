function add (a :number, b:number) :number{
    return a+b;
}
const output = add(10, 20);
console.log(output);

let balance = 5000;
const depositMoney = function(amount: number) :number{
    return balance + amount;
}
console.log(depositMoney(10000));

const withdrawMoney = function(amount: number) :number{
    return balance - amount;
}

console.log(withdrawMoney(2000));

// TEMPLATE STRING
const fname = "Harshini";
const lname = "Ananthan";
console.log(`${fname} ${lname}`);

