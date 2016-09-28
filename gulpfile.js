//variables
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var paths = {
  sassinput: 'www/app/core/theme/app.scss',
  appAllSass: 'www/**/**/*.scss',
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
var sassOptions = {
  outputStyle: 'compressed',
  errLogToConsole: true
}

gulp.task('sass', function () {
  return gulp.src(paths.sassinput)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest(paths.sassoutput))
    .pipe(connect.reload());
});


//task for asynchronous changes

gulp.task('watch',function(){
  //primer parametro es la ruta archivos a escuchar
  // el segundo parametro para ejecutar una tarea.
  gulp.watch(paths.appAllSass,['sass']);

});

//default tasks
gulp.task('default', ['sass','webserver']);
