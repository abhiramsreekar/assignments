setInterval(()=>{
    let time= new Date();
    let ap=time.getHours()<12?"AM":"PM";
    console.log("1st format: "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
    console.log("2nd format: "+time.getHours()%12+":"+time.getMinutes()+":"+time.getSeconds()+" "+ap);
},1000);