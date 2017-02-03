var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");

gulp.task("reload", function() {
    browserSync.reload();
});

gulp.task("serve", ["sass"], function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html", ["reload"]);
    gulp.watch("app/scss/**/*.scss", ["sass"]);
});

gulp.task("sass", function() {
    return gulp.src("app/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);