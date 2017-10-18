var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var historyApiFallback = require('connect-history-api-fallback');
var modRewrite = require('connect-modrewrite');

var paths = {
        pages:     ['src/**/**.html'],
        images:    ['src/img/*'],
        source:     './src',
        sourceCSS:  './src/styles/main.less',
        sourceLESS: './src/styles/**/*.less',
        sourceJS:  [
                    'src/js/main.js',
                   ],
        sourceJSindividual:  [
                    'src/js/vendor/swiper.min.js'
        ],
        postCSSPlugins: [
            cssnext({ browsers: ['last 3 versions'] })
        ],
        dest:      './dist',
        destCSS:   './dist/styles/'
};

//task: "copy-html" copy html to destination
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest("dist"));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', function() {
    gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dest + '/img'));
});

//task: "gulp" copy html, and update css to destination
gulp.task("default", ["copy-html", "css", "js", "copy-js"], function () {
    
});


gulp.task("copy-js", function () {
    return gulp.src(paths.sourceJSindividual)
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('dist/js'));
});

//task: "gulp js"
gulp.task("js", function(){
    return browserify({
        basedir: '.',
        debug: true,
        entries: paths.sourceJS,
        cache: {},
        packageCache: {}
    })
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.js']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  })
});

//task: "css" update css to destination
gulp.task('css', function () {
  return gulp.src(paths.sourceCSS)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss(paths.postCSSPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(paths.destCSS));
});

//cmd: "gulp watch" output css live without reloading
gulp.task('watch', ['browserSync'], function(){
  gulp.watch(paths.pages, ['copy-html']);
  gulp.watch(paths.sourceLESS, ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch(paths.sourceJSindividual, ['copy-js']);
});


