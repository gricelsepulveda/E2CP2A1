var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var $= require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sassPaths = [
  'scss',
];
/*
  Procesa el archivo nbx-inicio que contiene los estilos para el home
*/
gulp.task('styles', function() {
  return gulp.src('./scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths
      //outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
  .pipe(rename('styles.css'))
  .pipe(gulp.dest('./css'));
});
/*
	Añadimos una tarea watch para que observe los cambios a los archivos scss
 */
gulp.task('default', ['styles'], function() {
  gulp.watch(['./scss/**/*.scss'], ['styles']);
});