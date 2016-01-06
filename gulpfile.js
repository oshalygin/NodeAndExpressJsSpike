var gulp = require("gulp");
var config = require("./gulp.config.js")();
var $ = require("gulp-load-plugins")({ lazy: true });

gulp.task("linting", function () {
    return gulp.src(config.jsFiles)
        .pipe($.jshint())
        .pipe($.jshint.reporter("jshint-stylish", {
            verbose: true
        }))
        .pipe($.jscs());

});

gulp.task("inject", function () {

    var wiredep = require("wiredep").stream;

    var htmlInject = gulp.src(["./wwwroot/css/*.css", "./wwwroot/js/*.js"], { read: false });


    return gulp.src(config.htmlFiles)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(htmlInject, config.injectOptions))
        .pipe(gulp.dest(config.viewSourceDirectory));

});

gulp.task("serve", ["linting", "inject"], function () {
    return $.nodemon(config.nodeOptions)
        .on("restart", function () {
            console.log("Restarting....");
        });
});