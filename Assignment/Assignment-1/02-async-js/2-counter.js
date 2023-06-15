counter = 1;
function update(){
    console.clear(); 
    console.log(counter++); 
    setTimeout(update,1000);
}
update()