// callback is also a function that is passed in argument/parameter


function test(){
    console.log("Test Func Called");
}

function test2(){
    console.log("Test Func Called 2");
}

function funcThatTakeCallback(callback){
    let a = 10;
    let b = a * 40;
    console.log("b = ", b);
    //
    //
    //
    //
    callback()
}

// calling
// funcThatTakeCallback(test)
// funcThatTakeCallback(test2)


// filter (for matching condition & return all matched values), 
// map, 
// find (for finding single value)
// const products = [
//     { title: 'Board Marker', price: 100, },
//     { title: 'Mobile Cover', price: 300, },
//     { title: 'Fan', price: 5000, },
//     { title: 'Keyboard', price: 700, },
//     { title: 'Mouse', price: 740, },
//     { title: 'prod1', price: 80, },
// ]


const names = ["Ali Owais", "Zaid Sheikh", "Haris Asim", "Bilal Ali"];

// const myFilter = 

const filteredNames = names.filter((name, index) => {
    // console.log("Name = ", name, " , Index = ", index);
    return name.includes("Ali")
})

// console.log(filteredNames);

// const myName = "Bilal"

// console.log(myName.includes("als"))


// Modulus Operator
// const isEven = 100 % 2  // (0 -> even, 1 -> odd)
// console.log()



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = numbers.filter((num)=> {
    return num % 2 !== 0
})

// console.log(evenNum);

// git init (run first time on new proj)
// git add . (ruun everytime)
// git commit -m "class 2 filter method done"
// git branch -M main
// git remote add origin https://github.com/bqwebclass/nodejs-class.git
// git push -u origin main