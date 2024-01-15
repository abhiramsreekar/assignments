const fs=require("fs");

fs.writeFile("file.txt","New message",function(err){
    if(err){
        console.log("Error occurred");
    }
    else{
        console.log("Message is written in the file");
    }
})