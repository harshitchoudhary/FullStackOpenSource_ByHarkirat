/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function returnPromise(){
    return new Promise((resolve, reject)=>{
        resolve(console.log('Promise is resolved'));
    })
}
function wait(n) {
    setTimeout(returnPromise, n)
}

wait(5000)