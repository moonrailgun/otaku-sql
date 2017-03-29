var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var gulpsync = require('gulp-sync')(gulp);
var packager = require('electron-packager');
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

gulp.task('deploy', function(cb) {
  packager(config.deploy.current.settings, function(err, appPaths){
    if (err) {
      throw new gutil.PluginError('deploy', err);
    }
    gutil.log('[deploy]', appPaths);
    cb();
  })
});
gulp.task('deploy-all', function(cb) {
  packager(config.deploy.all.settings, function(err, appPaths){
    if (err) {
      throw new gutil.PluginError('deploy', err);
    }
    gutil.log('[deploy]', appPaths);
    cb();
  })
});
