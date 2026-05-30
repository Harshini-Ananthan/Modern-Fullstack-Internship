// console.log("Hello from JS");

// setTimeout(() => {
//     console.log("There is a 3sec delay");
// }, 3000 );

// console.log("Bye from JS");

const promise = new Promise((resolve, reject) => {
    console.log("This is a Promise");
    reject("Promise rejected");
});

promise.then(() => {
    console.log("Resolved");
}).catch((error) => {
    console.log(error.message);
})


// A function can return a promise
function returnPromise(){
    return new Promise((resolve, reject) => {
        reject("Rejected");
    })
}
const p = returnPromise();

// PROMISE HANDLING
p.then(() => {
    console.log("It is fulfilled");
}).catch((err) => {
    console.log("Error", err);
})