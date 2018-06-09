const gulp = require('gulp')
const browserify = require('browserify')
const fs = require('fs')
gulp.task('default', () => {
     browserify('frontend.js')
    .transform('babelify',{presets:['es2015','react']})
    .bundle()
    .pipe(fs.createWriteStream('public/index.js'))
})
