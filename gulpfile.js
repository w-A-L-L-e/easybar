var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var jsFile = 'js/easybar.js',
    cssFile = 'css/easybar.css',
    jsDest = 'dist/js',
    cssDest = 'dist/css';

gulp.task('minify-js', function () {
    return gulp.src(jsFile)
        .pipe(rename('easybar.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('minify-css', () => {
    return gulp.src(cssFile)
        .pipe(rename('easybar.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(jsFile, ['minify-js']);
    gulp.watch(cssFile, ['minify-css']);
})