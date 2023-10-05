const gulp = require('gulp'); //função usada para poder usar plugins do gulp
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function comprimeImage() {
    return gulp.src('./source/image/*') // pasta origem
        .pipe(imagemin()) // pipe é usado para chamar outras funções e aqui está chamando a const
        .pipe(gulp.dest('./build/image')) // pasta destino
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/image/*', { ignoreInitial: false }, gulp.series(comprimeImage));
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}