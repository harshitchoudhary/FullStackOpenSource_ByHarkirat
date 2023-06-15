function calculateTime(n) {
    let sum = 0;
    let oldTime = new Date();
    for(let i = 1; i<= n; i++){
        sum += i;
    }
    let newTime = new Date(); 
    return (newTime - oldTime)/1000;
}

console.log(calculateTime(5000000000));