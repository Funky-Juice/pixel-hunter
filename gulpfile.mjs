import fs from 'node:fs';
import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import sortMediaQueries from 'postcss-sort-media-queries';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import imagemin, {mozjpeg, optipng} from 'gulp-imagemin';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import mocha from 'gulp-mocha';
import {deleteAsync} from 'del';

const sass = gulpSass(dartSass);
const server = browserSync.create();

function style() {
  return gulp.src('sass/style.scss', {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass({
      silenceDeprecations: ['import']
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      sortMediaQueries({
        sort: 'mobile-first'
      })
    ]))
    .pipe(gulp.dest('build/css', {sourcemaps: '.'}))
    .pipe(server.stream())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
}

function scripts() {
  return gulp.src('js/main.js')
    .pipe(plumber())
    .pipe(webpackStream({
      mode: 'development',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          }
        ]
      },
      output: {
        filename: 'main.js'
      }
    }, webpack))
    .pipe(gulp.dest('build/js/'));
}

function copyHtml() {
  return gulp.src('*.html')
    .pipe(gulp.dest('build'))
    .pipe(server.stream());
}

function copyAssets() {
  const sources = ['img/*.*'];

  if (fs.existsSync('fonts')) {
    sources.push('fonts/**/*.{woff,woff2}');
  }

  return gulp.src(sources, {base: '.', encoding: false, allowEmpty: true})
    .pipe(gulp.dest('build'));
}

function optimizeImages() {
  return gulp.src('build/img/**/*.{jpg,png,gif}', {encoding: false})
    .pipe(imagemin([
      optipng({optimizationLevel: 3}),
      mozjpeg({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
}

function clean() {
  return deleteAsync(['build']);
}

function test() {
  return gulp.src('js/**/*.test.js', {read: false})
    .pipe(mocha({
      require: ['@babel/register']
    }));
}

function serve() {
  server.init({
    server: './build',
    notify: false,
    open: true,
    port: 3501,
    ui: false
  });

  gulp.watch('sass/**/*.{scss,sass}', style);
  gulp.watch('*.html', copyHtml);
  gulp.watch('js/**/*.js', gulp.series(scripts, function reload(done) {
    server.reload();
    done();
  }));
}

const assemble = gulp.series(clean, gulp.parallel(copyHtml, scripts, style, copyAssets));
const serveTask = gulp.series(assemble, serve);

export {
  style,
  scripts,
  copyHtml,
  copyAssets,
  optimizeImages as imagemin,
  clean,
  test,
  serveTask as serve
};

export const build = gulp.series(assemble, optimizeImages);
export default serveTask;
