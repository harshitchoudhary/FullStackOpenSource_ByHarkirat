// // const fs = require('fs');
// const express = require('express');

// const app = express();

// fs.readFile("test.txt", 'utf8', callback);

// function callback(err, data){
//     console.log(data);
// }



// console.log(sum(100));
const express = require('express');
const { resolve } = require('path');
const app = express()
const port = 3000

function sum (counter, sumRes){
    for(let i = 0; i<=counter; i++){
        sumRes += i;
    }
    return sumRes;
}
// function delay(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve(console.log('Hello'))}, 5000);
//     })
// }
function handleFirstRequest(req, res){
    let ans = req.query.counter;
    ans = sum(ans, 0);
    res.send(`Your ans is ${ans}`);
}

app.get('/dodo', handleFirstRequest)

function started(){
    console.log(`Port listening to ${port}`);
}

app.listen(port, started)