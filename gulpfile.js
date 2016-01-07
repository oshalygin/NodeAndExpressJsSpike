"use strict";
let gulp = require("gulp");
let config = require("./gulp.config.js")();
let $ = require("gulp-load-plugins")({ lazy: true });

gulp.task("linting", () => {
    return gulp.src(config.jsFiles)
        .pipe($.jshint())
        .pipe($.jshint.reporter("jshint-stylish", {
            verbose: true
        }))
        .pipe($.jscs());

});

gulp.task("inject", () => {

    let wiredep = require("wiredep").stream;

    let htmlInject = gulp.src(["./wwwroot/css/*.css", "./wwwroot/js/*.js"], { read: false });


    return gulp.src(config.htmlFiles)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(htmlInject, config.injectOptions))
        .pipe(gulp.dest(config.viewSourceDirectory));

});

gulp.task("serve", ["linting", "inject"], () => {
    return $.nodemon(config.nodeOptions)
        .on("restart", () => {
            console.log("Restarting....");
        });
});