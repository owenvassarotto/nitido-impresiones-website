//Librería GULP
const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// JavaScript 
const terser = require('gulp-terser-js');

//Imagenes
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
// const webp = require('gulp-webp');
// const avif = require('gulp-avif');

function css(done) {
  src("src/scss/**/*.scss")
  .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));
  done();
}

function minificarImagenes(done){

  const opciones = {
    optimizationLevel: 3
  }

  src("src/images/**/*.{png,jpg,jpeg}")
  .pipe(cache(imagemin(opciones)))  
  .pipe(dest('build/images'))

  done();
}

// function convertToWebp(done){

//   const opciones ={
//     quality: 50
//   };

//   src("src/images/**/*.{png,jpg,jpeg}")
//     .pipe(webp(opciones))
//     .pipe(dest('build/images'))

//   done();
// }

// function convertToAvif(done){

//   const opciones ={
//     quality: 50
//   };

//   src("src/images/**/*.{png,jpg,jpeg}")
//     .pipe(avif(opciones))
//     .pipe(dest('build/images'))

//   done();
// }

function dev(done) {
  watch("src/scss/**/*.scss", css);
//   watch("src/javascript/**/*.js", javascript);
  done();
}

function js(done){
  src('src/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(terser())
  .pipe(sourcemaps.write('.'))
  .pipe(dest('build/js'));

  done();
}

// exports.css = css;
// exports.convertToWebp = convertToWebp;
// exports.convertToAvif = convertToAvif;
exports.js = js;
exports.minificarImagenes = minificarImagenes;
exports.dev = dev;

