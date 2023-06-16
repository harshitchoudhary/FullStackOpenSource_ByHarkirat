/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(console.log('first'))}, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(console.log('second'))}, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(console.log('third'))}, 3000);
    })
}

async function calculateTime() {
    let start = new Date();
    await waitOneSecond().then(await waitTwoSecond()).then(await waitThreeSecond());
    let end = new Date();
    console.log((end-start)/1000 + " seconds");
}

calculateTime();

// OUTPUT
// first
// second
// third
// 5.004 seconds