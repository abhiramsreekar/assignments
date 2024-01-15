const fs=require("fs");

fs.readFile("file.txt","utf-8",function(err,data){
    console.log(data);
})

//Expensive operation
for(let i=0;i<10000000000;i++){}// first completes this operation then reads the file