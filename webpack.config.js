const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    // 模块加载器配置
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // 将样式插入到 DOM
                    'css-loader', // 处理 CSS 文件
                    'less-loader' // 将 LESS 转换为 CSS
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader', // 或者使用 'file-loader'
                        options: {
                            limit: 8192, // 限制文件大小，超过则使用文件加载器
                            name: 'images/[name].[hash:8].[ext]' // 输出路径和文件名
                        }
                    }
                ]
            }
            // 添加其他加载器配置
        ]
    },

    // 插件配置
    plugins: [
        // 插件实例
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html') // 使用自定义模板
        }),
        new webpack.ProvidePlugin({
            "React": "react"
        })
    ],

    // 开发服务器配置
    devServer: {
        hot: true,
        // contentBase: path.resolve(__dirname, 'dist'),
        port: 5173
    }
    // mode: 'development'
};