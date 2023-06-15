let counter = 1;
function update(){
    console.clear();
    console.log(counter++)
}
setInterval(update,1000);