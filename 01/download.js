// 一个download模块，可以帮助了解模块是怎么运作的。

module.exports.clone =  async function clone(repo, desc) {
    const { promisify} = require('util')
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora('正在下载....${repo}');
    process.start();
    try {
        await download(repo, desc)
    } catch (e) {
        process.fail()
    }
    process.succeed()
    // download(repo, desc, err => {
    //     if (err) {
    //         process.fail()
    //     } else {
    //         process.succeed()
    //     }
    // })
}
