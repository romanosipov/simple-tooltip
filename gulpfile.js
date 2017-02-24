var gulp   = require("gulp");
var concat = require("gulp-concat");
var reload = require("gulp-livereload");

gulp.task("lib-js", function() {
  return gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task('js', function() {
  return gulp.src(['./src/js/simple-tooltip.js'])
    .pipe(gulp.dest("./dist/js"))
    .pipe(reload());
});

gulp.task('css', function() {
  return gulp.src(['./src/css/simple-tooltip.css'])
    .pipe(gulp.dest("./dist/css"))
    .pipe(reload());
});

gulp.task("html", function() {
  return gulp.src("./src/html/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(reload());
});

gulp.task('watch', function() {
  reload.listen({start: true});
  gulp.watch('src/js/**/*.js',     {cwd: './'}, ['js']);
  gulp.watch('src/css/**/*.css',   {cwd: './'}, ['css']);
  gulp.watch('src/html/**/*.html', {cwd: './'}, ['html']);
});

gulp.task("default", ['html', 'lib-js', 'js', 'css']);
