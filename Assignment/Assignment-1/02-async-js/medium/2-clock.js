// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showFormattedDate(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    console.clear();
    if(minute < 10)
        minute = `0${minute}`
    if(second < 10)
        second = `0${second}`
    if(hour < 10)
        hour = `0${hour}`
    
    console.log(`${hour}::${minute}::${second}`);

    if( hour > 12){
        hour = hour%12;
        if(hour < 10){
            hour = `0${hour}`
        }
        console.log(`${hour}::${minute}::${second} PM`);
    }
    else{
        if(hour < 10){
            hour = `0${hour}`
        }
        console.log(`${hour}::${minute}::${second} AM`);
    }
    setTimeout(showFormattedDate, 1000);
}

showFormattedDate()