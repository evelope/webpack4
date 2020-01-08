## 换淘宝源 
- npm config set registry https://registry.npm.taobao.org
// 配置后可通过下面方式来验证是否成功
- npm config get registry

## 恢复源
- npm config set registry http://www.npmjs.org

## webpack 安装
- 安装本地 webpack
  npm init -y
  npm install webpack webpack-cli -D

## 0配置
- npx webpack     打包 -> 输出后的结果

- 打包 支持 js 模块化

## 手动配置 
- 名字 默认 webpack.config.js
- 手动配置 js     npx webpack --config  webpack.config.copy.js
-  -- 自定义参数  npm run build --config ****.js

## 启动服务
- npm install webpack-dev-server -D
- npx webpack-dev-server


## npm i mini-css-extract-plugin -D 抽离css 插件
## npm i postcss-loader autoprefixer -D 抽离 自动加 css 前缀

## npm i  expose-loader    暴露全局的 loader  内嵌 loader
```js
    import $ from 'expose-loader?$!jquery';


    rules: [
        {
            test: require.resolve('jquery'),
            use: 'expose-loader?$'
        },
    ]
    import $ from 'jquery';

```

## 每个模块中 注入 $  
```js
new webpack.ProvidePlugin({
    // 每个模块中 注入 $  
    '$': jquery
})
```

## npm i file-loader -D 文件/图片 loader

## npm i html-withimg-loader -D     // html loader

