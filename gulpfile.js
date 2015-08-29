var gulp        = require('gulp'),
    browserify  = require('browserify'),
    //babel       = require('babelify'),
    // watch       = require('gulp-watch'),
    karma       = require('gulp-karma'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream');

var src = 'src';

var testFiles = [
  src + '/**/*Spec.js'
];

gulp.task('default', function(){
    gulp.watch(src + '/**/*.*', ['build']);
});

gulp.task('build', function(){
  gulp.src([src + '/index.html', src + '/assets/**/*.*']).pipe(gulp.dest('public/'));
  browserify({
    entries: src + '/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/scripts/'));
});     

gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      //console.log(err);
      throw err;
    });
});