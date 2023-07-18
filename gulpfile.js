const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
}

function encriptaJavascript() {
    return  gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.watch = function () {
    gulp.watch('./src/styles/*.scss',{ignoreInitial:false},gulp.series(compilaSass),)
    gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.series(encriptaJavascript),)
}

exports.build =  gulp.parallel(compilaSass,encriptaJavascript)