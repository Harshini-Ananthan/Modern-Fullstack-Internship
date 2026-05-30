async function sayHello() {
    console.log("Hello from async");
}
sayHello();

// NORMAL PROMISE
function returnPromise(){
    return new Promise((resolve, reject) => {
        resolve("Promise resolve with value 10");
    })
}

const p1 = returnPromise();
console.log("Promise: ", p1);

// ASYNC
async function returnPromise(){
    return new Promise((resolve, reject) => {
        resolve("Promise resolve with value 10");
    })
}

const p1 = returnPromise();
console.log("Promise: ", p1);