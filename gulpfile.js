const gulp = require('gulp');
const sass = require('gulp-sass');
const auto = require('gulp-autoprefixer');
const autoPrefixer = require('gulp-autoprefixer');

function css(){
    return gulp
    .src("sass/app.scss")

    .pipe(autoPrefixer())

    .pipe(sass({outputsStyle:"expanded"}))


    .pipe(gulp.dest("css"));
}

gulp.task('css', css);

