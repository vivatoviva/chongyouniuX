const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    //配置项
                    options: {
                        presets: [
                            "env", "react"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
    　　　　{
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
    　　　　}
        ]
    },
    plugins:[
        new uglify(
            {
            uglifyOptions:{
                mangle:{
                    reserved:["abc","first","lottery"]
                },
                compress:true
            }
        })
    ]
  }