const http = require('http');
const chalk = require('chalk');
const path = require('path');
const config = require('./defaultConfig.js');
const readFile = require('./readFile.js');

var server = http.createServer(function(req,res){//创建服务器，使用回调函数
	const filePath = path.join(config.root,req.url)//path.join将多个参数合成一个path
	console.info("path",`${chalk.green(filePath)}`)
	readFile(req,res,filePath);//异步读取文件
});
 
server.listen(config.port,config.hostname,()=>{//启动一个服务器来监听连接
	var addr = `http://${config.hostname}:${config.port}`;
	console.info(`listenning in:${chalk.green(addr)}`);	
})