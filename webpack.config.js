
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let miniCssExPlu = require("mini-css-extract-plugin");
let webpack = require('webpack');
let jquery = require('jquery');
module.exports = {
    // devServer: { // 开发服务器 配置
    //     port: 3000,
    //     progress: true,
    //     contentBase: "./build",
    //     open: true,
    //     compress: true
    // },
    mode: 'production',  // 模式 production development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.[hash:4].js', // [hash] 哈希  :4 位数
        path: path.resolve(__dirname, 'build'), //绝对路径
    },
    // watch: true,
    devtool: 'source-map', //帮助调试源代码
    plugins: [//所有的 webpack 插件
        new HtmlWebpackPlugin({
            template: "./src/index.html", // 使用的 模板
            filename: 'index.html', // 打包后的文件名字
            minify: {
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true, // 压缩成一行
            },
            hash: true, // hash戳
        }),
        new miniCssExPlu({
            filename: 'main.css',

        }),
        // new webpack.ProvidePlugin({
        //     // 每个模块中 注入 $  
        //     '$': jquery
        // })
    ],
    module: { // 模块
        rules: [
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: 'file-loader'
            },
            // {
            //     test: require.resolve('jquery'),
            //     use: 'expose-loader?$'
            // },
            // 规则   css-loader  解析 @import 语法
            // css loader
            // style loader 把css 插入到 head 标签

            // loader 对象形式 { loader: ' ...' , options: ... }
            // loader 顺序 从右边向左  从上到下
            {
                test: /\.css$/, use: [
                    // 'style-loader', // 打包到 head 最下面
                    // {
                    //     loader: 'style-loader',
                    //     // options: {
                    //     //     insertAt: 'top' // 打包到 head 上面
                    //     // }
                    // },
                    miniCssExPlu.loader, // 抽离css 插件 替换 style-loader
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // 'style-loader', 
                    miniCssExPlu.loader, // 抽离css 插件
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },

        ]
    }
}