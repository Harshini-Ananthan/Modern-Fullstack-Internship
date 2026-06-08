// console.log(a);
//  a=10;


// function fun1(){
//     var a = 50;
//     function fun2(){
//         return a;
//     }
//     return fun2;
// }
// const output = fun1();
// console.log(output);


for(let j=1; j<=5; j++){
    setTimeout(() => {
        console.log("let : ",j);
    },j*1000);
}

function fun(i) {
    setTimeout(() => {
        console.log("var : ",i);
    }, i*1000);
}

for(var i=1; i<=5; i++){
    fun(i);
}