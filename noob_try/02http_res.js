const http = require('http')

const server = http.createServer()

server.on('request',function (req, res) {
    console.log(req.url)
    res.write('hello')
    res.write(' world')

    //必须要end才可以
    res.end()
})

//绑定端口号
server.listen(5000)