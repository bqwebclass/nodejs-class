// Three state of Promse in JS
// pending, resolve, reject

// async function callAllPromise(){
//     const prom1 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 1 resolved");
//         }, 2000); // 2 sec
//     });
    
//     const prom2 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2 resolved");
//         }, 4000); // 4 sec
//     });
//     console.log(prom1);
//     console.log(prom2);

//     const aaa = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))

//     console.log(aaa);
    
// }

// callAllPromise();

// console.log();

// prom1.then((res) => {
//     console.log("Promise Resolved, " , res);
// })
// .catch((err) => {
//     console.log(err);
// })

// function abc(){
// }
function test(){
    console.log("First");
    
    setTimeout(()=>{
        console.log("Second");
    }, 0)
    
    new Promise((resolve, reject) => {
        console.log("Promise resolved");
        // setTimeout(() => {
        //     resolve();
        // }, 0);
    });
    
    console.log("Third");
}

test() // First

// First, Third, Second

// CallStack -> LIFO 

// Micro or Macro Queue


// setTimeOut & Promise -> same time resolved -> Promise -> Promise priority is High