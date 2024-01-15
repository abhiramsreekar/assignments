const fs=require("fs");

fs.readFile("file.txt","utf-8",function(err,data){
    let s=data;
    let ns="";
    ns+=s[0];
    for(let i=1;i<s.length;i++){
        if(s[i-1]==" " && s[i]==" ") continue;
        else ns+=s[i];
    }
    console.log(ns);
})