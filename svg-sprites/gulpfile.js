var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    inject = require('gulp-inject'),
    path = require('path');
    
// function svg() {
//     var svgs = gulp
//         .src('./svg/*.svg')
//                 .pipe(svgmin(function (file) {
//             var prefix = path.basename(file.relative, path.extname(file.relative));
//             return {
//                 plugins: [{
//                     cleanupIDs: {
//                         prefix: prefix + '-',
//                         minify: true
//                     }
//                 }]
//             }
//         }))
//         .pipe(svgstore({ inlineSvg: true }));
 
//     function fileContents (filePath, file) {
//         return file.contents.toString();
//     }
 
//     return gulp
//         .src('./index.html')
//         .pipe(inject(svgs, { transform: fileContents }))
//         .pipe(gulp.dest('./sprite'));
// }

// exports.svg =  svg;

function html(){
    gulp.src('./src/index.html')
  .pipe(inject(gulp.src(['./html/*.html']), {
    starttag: '<!-- inject:{{path}} -->',
    relative: true,
    transform: function ('./html/*.html', file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest('./dest'));
}

exports.html = html;