//variables
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var paths = {
  sassinput: 'www/app/core/theme/app.scss',
  sassoutput: 'www/app/core/theme/'
};
// Local server
/**
*@desc task responsible of running local server for working locally
*/

gulp.task('webserver',function() {
  connect.server({
    root:'www',
    livereload: true
  });
});

//Task responsible of converting sass to css files.

gulp.task('sass', function () {
  return gulp.src(paths.sassinput)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sassoutput));
});

//default tasks
gulp.task('default', ['sass','webserver']);
