
const {src, dest, series, parallel} = require('gulp');
var gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');

const destPath = 'dest/';
const sassPath = 'scss/**/*.scss';
        

function styles(){    
    return gulp.src(sassPath)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(destPath+'css'));
}
    
function watch(){
    return gulp.watch(sassPath, gulp.parallel(styles));
}

exports.default =  parallel(styles, watch);
exports.styles = styles;