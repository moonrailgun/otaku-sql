var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpsync = require('gulp-sync')(gulp);
var config = require('./gulp/config');
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true});

gulp.task('default', ['clean'], function(){
  gulp.start('sass', 'html', 'assets', 'webpack');
});

gulp.task('watch', gulpsync.sync(
  [
    'clean',
    ['sass', 'html', 'assets', 'webpack']
  ]),function(){
    watch(config.sass.all, function(){  //监听所有sass
      gulp.start('sass');             //出现修改、立马执行sass任务
    });

    watch(config.html.src, function(){
      gulp.start('html');
    });

    watch(config.assets.src, function(){
      gulp.start('assets');
    });

    watch([config.base.src + '/*.js', config.base.src + '/**/*.js'], function(){  //监听所有 es6 js
      gulp.start('webpack');
    });
  }
);
