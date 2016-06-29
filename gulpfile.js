'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const maps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const serverScripts = ['index.js', 'lib/*.js', 'test/*.js', 'models/*.js', 'routes/*.js'];
const appScripts = ['./app/**/*.jsx'];

gulp.task('watch', () => {
  gulp.watch(serverScripts, ['lint', 'test']);
  gulp.watch(appScripts, ['webpack:dev']);
});

gulp.task('webpack:dev', ['scss:dev', 'html:dev', 'img:dev'], () => {
  return gulp.src('app/js/entry.jsx')
    .pipe(webpack({
      output: {
        filename: './bundle.js'
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

gulp.task('scss:dev', () => {
  return gulp.src('app/scss/main.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('html:dev', () => {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('img:dev', () => {
  return gulp.src('app/img/*')
    .pipe(gulp.dest('./build/img'));
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

gulp.task('default', ['lint', 'test']);
