const { src, dest } = require('gulp')
const sass = require('gulp-dart-sass')

exports.build = () => (
  src('./*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./dist/') )
)
