const { src, dest, parallel, series, watch } = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()


function styles() {
    return src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css/'))
    .pipe(browserSync.stream())
}
function watch_dev() {
    watch(['./sass/style.scss'], styles).on(
      'change',
      browserSync.reload
    )
}

exports.styles = styles
  
exports.default = parallel(
    styles,
    watch_dev
)
  
exports.build = series(
    styles
)