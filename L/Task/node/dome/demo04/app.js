// 创建名为upload的目录
const fs=require('fs');
var path="./upload";

fs.stat(path,(err,date)=>{
    if(err){
        mkdir(path);
        return;
    }
    if(date.isDirectory()){
        console.log('upload目录存在');
    }
    else{
        fs.unlink(path,(err)=>
        {
            if(!err)
            {
                mkdir(path);
            }
            else
            console.log("创建失败");
        })
        
    }
})
function mkdir(dir){fs.mkdir(dir,(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('创建成功');
})
}