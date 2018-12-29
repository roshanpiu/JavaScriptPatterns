// Functions as first class citizens
// Meaning - function can be treated like a variable
// Functions can be passed as arguments to other functions 
// Functions can be assigned as a value to a variable
// Functions can be returned from a function

// Callback
// Meaning - callback is a function that is called inside a another function

const calc = () => {
    return 4 * 3;
}

const printCalc = (callback) => {
    console.log(callback());
}

let aNumber = calc();

console.log(aNumber);

// callback example
printCalc(calc);
