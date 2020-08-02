// var p=new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 	var name ='张三';
// 	resolve(name);
// 	},3000);
// })
// p.then(function(data){
// 	console,log(data);
// })
// async await 用法
async function test (){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name='张三 222';
            resolve(name);
        },3000);
    })
}
async function main()
{
    var data=await test();
    console.log(data);
}
main();