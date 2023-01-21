// vue3 vue.config.js
const webpack = require("webpack");
module.exports = {
    // 跳过检查host
    devServer: { disableHostCheck: true },
    publicPath: "./",
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                // src下的文件夹
                assets: "@/assets",
                components: "@/components",
                views: "@/views",
            },
        },
    },
}