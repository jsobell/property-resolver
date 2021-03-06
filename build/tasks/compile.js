var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var paths = require("../paths");

gulp.task('compile', function() {
    var tsResult = gulp.src([paths.source, paths.typings])
        .pipe(ts({
            declaration: true,
            module: "commonjs",
            target: "es3"
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.dist + "/descriptors")),
        tsResult.js.pipe(gulp.dest(paths.dist + "/commonjs"))
    ]);
});