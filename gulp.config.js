module.exports = function () {

    var javaScriptFiles = ["*.js", "./src/**/*.js"];

    var config = {
        jsFiles: javaScriptFiles,
        wiredepOptions: {
            bowerJson: require("./bower.json"),
            directory: "./wwwroot/lib",
            ignorePath: "../../wwwroot"
        },
        htmlFiles: "./src/views/*.html",
        viewSourceDirectory: "./src/views",
        injectOptions: {
            ignorePath : "/wwwroot"
        },
        nodeOptions: {
            script: "server.js",
            delayTime: 1,
            env: {
                "PORT" : 9999
            },
            watch: javaScriptFiles
        }
    };



    return config;
};
