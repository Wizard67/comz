const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-dart-sass')
const flexGapPolyfill = require('flex-gap-polyfill')
const cssnano = require('cssnano')

exports.build = () => (
  src('./*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([
      flexGapPolyfill()
    ]))
    .pipe(dest('./dist/') )
)
