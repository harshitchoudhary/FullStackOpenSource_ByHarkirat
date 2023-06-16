/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(console.log('first'))}, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(console.log('second'))}, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(console.log('third'))}, 3000);
    })
}

async function calculateTime() {
    let start = new Date();
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    let end = new Date();
    console.log((end-start)/1000 + " seconds");
}

calculateTime();
// OUTPUT
// first
// second
// third
// 3.001 seconds