const fs = require('fs');

fs.readFile('data.txt', 'utf8',output);

function output(err, data){
    console.log(data);
}
    