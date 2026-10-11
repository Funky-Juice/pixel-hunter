import {spawn} from 'node:child_process';
import {existsSync} from 'node:fs';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
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
import {deleteAsync} from 'del';

const sass = gulpSass(dartSass);
const server = browserSync.create();

const browsers = [
  'last 1 version',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Opera versions',
  'last 2 Edge versions'
];

function style() {
  return gulp.src('sass/style.scss', {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({overrideBrowserslist: browsers}),
      sortMediaQueries()
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
  const sources = ['img/**/*'];

  if (existsSync('fonts')) {
    sources.push('fonts/**/*.{woff,woff2}');
  }

  return gulp.src(sources, {
    base: '.',
    encoding: false,
    allowEmpty: true
  })
    .pipe(gulp.dest('build'));
}

function optimizeImages() {
  return gulp.src('build/img/**/*.{jpg,png,gif}', {encoding: false, allowEmpty: true})
    .pipe(imagemin([
      optipng({optimizationLevel: 3}),
      mozjpeg({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
}

function clean() {
  return deleteAsync(['build']);
}

function reload(done) {
  server.reload();
  done();
}

function startServer() {
  server.init({
    server: './build',
    notify: false,
    open: true,
    port: 3501,
    ui: false
  });

  gulp.watch('sass/**/*.{scss,sass}', style);
  gulp.watch('*.html', copyHtml);
  gulp.watch('js/**/*.js', gulp.series(scripts, reload));
}

function test(done) {
  const child = spawn(process.execPath, [
    'node_modules/mocha/bin/mocha.js',
    '--require',
    '@babel/register',
    'js/**/*.test.js'
  ], {stdio: 'inherit'});

  child.on('exit', (code) => {
    if (code === 0) {
      done();
      return;
    }
    done(new Error(`Тесты завершились с кодом ${code}`));
  });
}

const assemble = gulp.series(clean, gulp.parallel(copyHtml, scripts, style, copyAssets));

export {
  style,
  scripts,
  copyHtml,
  copyAssets as copy,
  optimizeImages as imagemin,
  clean,
  test,
  assemble
};

export const build = gulp.series(assemble, optimizeImages);
export const serve = gulp.series(assemble, startServer);
