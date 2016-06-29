'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');

const serverScripts = ['index.js', 'lib/*.js', 'test/*.js', 'models/*.js', 'routes/*.js'];
const appScripts = ['./app/**/*.jsx'];

gulp.task('webpack:dev', () => {
  return gulp.src('app/js/entry.jsx')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?/,
            include: __dirname + '/app/js/',
            loader: 'babel'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', () => {
  return gulp.src(serverScripts)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', () => {
  return gulp.src('test/*test.js')
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(serverScripts, ['lint', 'test']);
});

gulp.task('default', ['lint', 'test']);
