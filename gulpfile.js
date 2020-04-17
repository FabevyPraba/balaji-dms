const gulp = require('gulp');
const sass = require('gulp-sass');
const include = require('gulp-include');
const merge = require('merge-stream');
const browserSync = require('browser-sync').create();

const vendors_js = ['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/@popperjs/core/dist/cjs/popper.js'];

gulp.task('vendors', function() {
    
    var tasks = vendors_js.map(function(element){

        return gulp.src(element)
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('src/js'))

    });

    return merge(tasks);

});
//compile scss into css
function style() {
    //1.where is my scss
    return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('src/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;