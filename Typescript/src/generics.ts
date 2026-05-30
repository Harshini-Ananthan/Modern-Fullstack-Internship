// similar to templates in C++. The type of the variable can be decided later.

function generic<t> (value : t) : void {
    console.log(value);
}

generic<string>("Hello, World!");
generic<number>(42);
generic<boolean>(true);


function generic2<T> (value : T) : T {
    return value;
}
const output = generic2<string>("Hello, TypeScript!");
const num = generic2<number>(10);
console.log(output);
console.log("Number: ", num);

function getArrElem<T> (arr : T[]) : T[] | undefined {
    return arr;
}

const result = getArrElem<number[]>([[1, 2, 3, 4, 5]]);
console.log("0th element: ", result);

