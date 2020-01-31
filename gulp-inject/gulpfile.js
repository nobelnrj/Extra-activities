var inject = require('gulp-inject'),
    gulp = require('gulp');

function inject(){
    gulp.src('./src/index.html')
    .pipe(inject(gulp.src('./src/**/*.js', {read: false})))
    .pipe(gulp.dest('./dist'));
}

exports.inject = inject;