# fs模块   (file System)
fs是用来操作文件系统的一个核心模块
文件：新增、修改(读写)、删除、复制
文件夹：创建、删除

##使用fs模块
异步方法  fs.read('path',calback)
callback = function(error,data){
	
}

同步方法  var data =fs.readSync('path')




try{
	
}catch(error){
	
}


fs.existsSync   判断文件或文件夹是否存在   如果文件存在，则返回 true，否则返回 false。

fs.stat('./test',function(err,stats){
    stats.isFile() //判断是否为文件
    stats.isDirectory() //判断是否为目录
})





rmdir('images')




/    根目录
./   当前目录
../  上一级目录



url模块

location window下子对象，用来操作浏览器地址栏   
http://www.baidu.com:8080/login/login.php#box?name=zhang&age=12
     D:\wamp\www\login\login.php
如何把url转化成对象    正则匹配  




event 模块

emit  触发



prototype原型
作用：实现代码的复用  减少内存
ECMA对象
对象是由属性和方法组成



构造函数和普通函数的区别
 构造函数要new一下   普通函数不需要


util         工具模块
path         处理本地路径
fs           处理文件
url          处理web路径
queryString  查询字符串
event        事件监听
http  模块

get得  post给    put请求服务器存储一个资源    delete 删除
restful


##HTTP模块
处理HTTP服务

web服务器   80  http 解析请求或作出响应

其他语言：nignx、Apache、IIS    提供HTTP服务    处理请求和响应

在其他语言中HTTP服务不需要做特殊处理。

在Nodejs  http服务器    http模块     只能根据需求去写 

例子：
var http = require('http');
var server=http.createServer(function (req,res) {
    //req  获取客户端请求   method url headers
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    
    //res  服务器端响应
    console.log(res);
    res.write('this is http server');
    res.end();
});
server.listen(8080,function () {
    console.log('this web server port is' + server.address().port);
});

//请求一个时间
var http = require('http');
var server = http.createServer(function (req,res) {
    function getDate() {
        var date=new Date();
        return[
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate()
        ].join('-')
    }
    res.write((new Date()).toLocaleString());
    res.end();
});
server.listen(8080,function () {
    console.log('http://localhost:' + server.address().port);
});


Requestd对象

request.url 客户端请求的url地址，如http://127.0.0.1/hello/world，那么request.url就是/hello/world
request.headers 客户端请求的http header
request.method 获取请求的方式，一般有几个选项，POST,GET和DELETE等，服务器可以根据客户端的不同请求方法进行不同的处理。
Response对象

writeHead
response.writeHead(statusCode, [reasonPhrase], [headers]) 
res.writeHead(200,{Content-Type:'text/plain'}); 
statusCode HTTP响应状态码
header 返回的http header，可以是字符串，也可以是对象
response.setTimeout(msecs, callback)
设置http超时返回的时间，一旦超过了设定时间，连接就会被丢弃
response.statusCode
设置返回的网页状态码
response.setHeader(name, value)
设置http协议头
response.headersSent 
判断是否设置了http的头
response.write(chunk, [encoding])
返回的网页数据，[encoding] 默认是 utf-8
response.end([data], [encoding])
将设置的数据包，发送数据到客户端(完成响应)。






优化：1.按需加载
      2.优化 服务器  数据库  用户电脑等



放数据时Object.create(null)    没有原型链


-----------------------------------------------------------------------------
网络  http  传输数据  最小单位    字节

nodejs Stream 流模块
一个流是一个具备了 可读、可写 或双工流(可读又可写)能力的接口。

Stream 流的作用
保证程序运行效率
防止数据丢失
防止内存的溢出

setEncoding(' ')    设置读取后数据编码方式  默认buffer
var fs = require('fs');
var rs = createReadStream(path,opt);
{
    flages:'r',
    encoding:null,
    start:0,
    end:0
}



















