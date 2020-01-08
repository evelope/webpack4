
let path = require('path');
module.exports = {
    mode: 'development',  // 模式 production development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build22'), //绝对路径
    }
}