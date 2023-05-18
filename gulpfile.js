const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
gulp.task('styles', function () {
    return gulp
        .src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*', gulp.series(['styles']));
});


gulp.task('prefix', function () {
    return gulp.src('./css/styles.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./'))
});

