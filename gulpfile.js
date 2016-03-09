var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function() {
    return gulp.src("file.less")
        .pipe(less())
        .pipe(gulp.dest(__dirname));
});

gulp.task("watch", function() {
    gulp.watch("file.less", gulp.series("less"));
});