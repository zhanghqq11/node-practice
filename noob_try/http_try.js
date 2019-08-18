//加载模块
var http = require('http')

var server = http.createServer()

//开服务器
server.on('request',function () {
    console.log('收到客户端请求')
})

//绑定端口号
server.listen(5000)