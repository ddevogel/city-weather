var gulp        = require('gulp'),
    browserify  = require('browserify'),
    //babel       = require('babelify'),
    // watch       = require('gulp-watch'),
    //karma       = require('gulp-karma'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream'),
    nodemon     = require('nodemon');

var src = 'src';

var testFiles = [
  src + '/**/*Spec.js'
];

gulp.task('default', function(){
    gulp.watch(src + '/app/**/*.*', ['build']);
});

gulp.task('build', function(){
  gulp.src([src + '/index.html', src + '/app/assets/**/*.*']).pipe(gulp.dest('public/'));
  browserify({
    entries: src + '/index.jsx',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/scripts/'));
});     

gulp.task('server', function(){
  nodemon({
   script: src + '/api/server.js'
  , env: { 'NODE_ENV': 'development', 'PORT': '8080' }
  })
})
  
  
  
  
  // process.env.PORT, process.env.IP
// gulp.task('test', function() {
//   // Be sure to return the stream 
//   return gulp.src(testFiles)
//     .pipe(karma({
//       configFile: 'karma.conf.js',
//       action: 'run'
//     }))
//     .on('error', function(err) {
//       // Make sure failed tests cause gulp to exit non-zero 
//       //console.log(err);
//       throw err;
//     });
// });