var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');
    
function svg() {
    return gulp.src('./svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "./sprite.svg",
                    render: {
                        scss: {
                            dest:"../../scss/_sprite.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('./sprite/'));
}

exports.svg =  svg;