var gulp   = require("gulp");
var concat = require("gulp-concat");

gulp.task("lib-js", function() {
  return gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task('js', function() {
  return gulp.src(['./src/js/simple-tooltip.js'])
    .pipe(gulp.dest("./dist/js"));
});

gulp.task('css', function() {
  return gulp.src(['./src/css/simple-tooltip.css'])
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("html", function() {
  return gulp.src("./src/html/*.html")
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ['html', 'lib-js', 'js', 'css']);
