const download = require('download-git-repo')
const repo = 'github:SAP/openui5-sample-app';
const desc = 'test';
const ora = require('ora')
const process = ora('正在下载....${repo}')
process.start()
    download(repo,desc, err =>{
    if (err){
        process.fail()
    } else {
        process.succeed()
    }
})
