// const gulp = require('gulp');
// const sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();

// gulp.task('sass', function(cb) {
//     gulp
//       .src('*.scss')
//       .pipe(sass())
//       .pipe(
//         gulp.dest(function(f) {
//           return f.base;
//         })
//       );
//     cb();
//   });
  
//   gulp.task(
//     'default',
//     gulp.series('sass', function(cb) {
//       gulp.watch('*.scss', gulp.series('sass'));
//       cb();
//     })
//   );

//   gulp.task('watch', function(){
//     gulp.watch('/scss/**/*.scss', ['sass']); 
//     // Other watchers
//   })

//   gulp.task('watch', ['browserSync'], function (){
//     gulp.watch('styles/**/*.scss', ['sass']); 
//     // Other watchers
//   })
