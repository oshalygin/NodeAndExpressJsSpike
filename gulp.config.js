module.exports = function () {
    var config = {
        jsFiles: ["*.js", "./src/**/*.js"],
        wiredepOptions: {
            bowerJson: require("./bower.json"),
            directory: "./wwwroot/lib",
            ignorePath: "../../wwwroot"
        },
        htmlFiles: "./src/views/*.html",
        viewSourceDirectory: "./src/views",
        injectOptions: {
            ignorePath : "/wwwroot"
        }
    };



    return config;
};
