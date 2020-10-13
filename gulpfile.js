const {src, dest, series, parallel, watch} =  require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const origin = 'src';
const destination = 'build';
const webpack= require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
// const babel= require('gulp-babel');


const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const imagemin = require('gulp-imagemin');
const optipng = require('imagemin-optipng');
const svgo = require('imagemin-svgo');

const cache = require('gulp-cache');


async function clean(cb) {
  await del(destination);
  cb();
}

function html(cb) {
  src(`${origin}/**/*.html`).pipe(dest(destination));
  cb();
}

async function css() {
  await src(`${origin}/scss/lib/**/*.css`).pipe(dest(`${destination}/css/lib`));  
  await src(`${origin}/scss/style.scss`)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(dest(`${destination}/css`)) 
}

function js(cb) {
  src(`${origin}/js/lib/**/*.js`).pipe(dest(`${destination}/js/lib`));  
  src(`${origin}/js/**.js`)
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))  
    .pipe(webpackStream(webpackConfig), webpack)
    // ,function(err, stats) {
    //   if (err||stats.hasErrors()) {console.log(err)};
    // }
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(dest(`${destination}/js`))  
  cb();
}

function img(cb) {
  src(`${origin}/images/*.{png,svg}`)
    .pipe(cache(imagemin([
      optipng({
        optimizationLevel: 5
      }),
      svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
      })
    ])))
    .pipe(dest(`${destination}/images`));
  cb();
}

function watcher(cb) {
  watch(`${origin}/**/*.html`).on('change', series(html, browserSync.reload))
  watch(`${origin}/**/*.scss`).on('change', series(css, browserSync.reload))
  watch(`${origin}/**/*.js`).on('change', series(js, browserSync.reload))
  watch(`${origin}/images/*.{png,svg}`).on('change', series(img, browserSync.reload))
  // watch(`${origin}/images/*.{png,svg}`, {cwd: './'}['img'])
  cb();
}

function server(cb) {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: destination
    }   
  })
  cb();
}



exports.default = series(clean, parallel(html, css, js,  img), server, watcher);
