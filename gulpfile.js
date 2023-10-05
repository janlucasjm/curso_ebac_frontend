const gulp = require('gulp'); //função usada para poder usar plugins do gulp
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

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
}