var fs = require('fs')
fs.readFile('./that.txt',function (error,data) {
    console.log(data.toString())
})
