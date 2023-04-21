"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
sass.compile = require("node-sass");

gulp.task('default', watchCompile)
gulp.task('sass', compileSass);


function compileSass(){
   return gulp.src("./src/sass/*.scss")
   .pipe(sass({
        outputStyle:'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest("./src/dist/css"));

    
}

function watchCompile(){
    gulp.watch('./src/sass/*.scss', compileSass)
}