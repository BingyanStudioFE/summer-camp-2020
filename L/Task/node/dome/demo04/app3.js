const fs=require('fs')
path="./wwwroot"
var dirArr=[];
fs.readdir(path,(err,date)=>{
    if(err)
    {
        console,log(err);
        return;
    }
    console.log(date);
    //若用for循环进行操作则会因为异步导致结果和想法违背
    
    
})