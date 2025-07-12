// console.log("Hello World!");


// container -> value -> store (let, const, var)
// hoisting, scope 
// var -> scope -> functional (global)
// var num = 10;
// var num = 20
// console.log(num);

// let name = "BanoQabil"

// name = "Node Js Class 1"
// console.log(name);



// const num2 = 10;  // can't redeclare + can't reassign

// num2 = 30
// console.log(num2);

// function -> (name func, arrow function)
// block of code


// 2 step declaration, function calling
// function printName(n, age, phone){ // argument, parameter
//     // code
//     console.log(n); 
//     console.log(age); 
// }

// printName("osama", 20, 50);


// write a function that sum from 1 to 10
// function sum(){
//     let sum = 0;
//     // for(variable initialize; condition checking; increment/decrement)
//     for (let i = 1; i < 11; i++) { // i = 1, 2, 3, 4, 5, ..... 11
//         sum = sum + i
//                 0 + 1
//                 1 + 2
//                 3 + 3
//                 6 + 4
//     }
//     console.log(sum);
// }

// sum();


// variable initilized with "var" keyword -> it moved on top of scope
const sum = () => {
    // var a;
    // console.log("Hello world!");
    // const sumFrom1To10 = (10*11)/2
    // console.log(sumFrom1To10);
   console.log(a);
   const a = 10; 
   console.log(a);
}


// redeclare/reassign


// sum();


const num = [10, 20, 30, 40, 50];
        //    0,  1, 2,  3,  4

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}