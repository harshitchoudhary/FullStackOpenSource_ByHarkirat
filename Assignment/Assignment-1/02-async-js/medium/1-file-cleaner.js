const fs = require('fs');

let res = [];

function retrieveData(err, data){
    let str = data.split(' ');
    for(let i = 0; i<str.length; i++){
        if(str[i] !== ''){
            res.push(str[i]);
        }
    } 
    res = res.join(' ');
    fs.writeFile('data.txt',res,'utf8',(err)=>{});
}

fs.readFile('data.txt','utf8',retrieveData);

