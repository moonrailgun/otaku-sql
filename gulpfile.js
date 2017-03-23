var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true});

gulp.task('default', ['clean'], function(){
  gulp.start('html', 'assets', 'webpack');
});
