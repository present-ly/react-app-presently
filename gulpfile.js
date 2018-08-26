const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const browserSync  = require('browser-sync');
const concat       = require('gulp-concat');
const eslint       = require('gulp-eslint');
const filter       = require('gulp-filter');
const newer        = require('gulp-newer');
const notify       = require('gulp-notify');
const plumber      = require('gulp-plumber');
const reload       = browserSync.reload;
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');

const PATHS = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'public/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  SCSS: 'src/**/*.scss',
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

const onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

const plumberOptions = {
  errorHandler: onError,
};

const jsFiles = {
  vendor: [

  ],
  source: PATHS.JS
};

// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src(jsFiles.source)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Copy react.js and react-dom.js to assets/js/src/vendor
// only if the copy in node_modules is "newer"
gulp.task('copy-react', function() {
  return gulp.src('node_modules/react/dist/react.js')
    .pipe(newer('dist/vendor/react.js'))
    .pipe(gulp.dest('dist/vendor'));
});
gulp.task('copy-react-dom', function() {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('dist/vendor/react-dom.js'))
    .pipe(gulp.dest('dist/vendor'));
});

// Copy assets/js/vendor/* to assets/js
gulp.task('copy-js-vendor', function() {
  return gulp
    .src([
      'dist/vendor/react.js',
      'dist/vendor/react-dom.js'
    ])
    .pipe(gulp.dest('dist/vendor'));
});

// Concatenate jsFiles.vendor and jsFiles.source into one JS file.
// Run copy-react and eslint before concatenating
gulp.task('concat', ['copy-react', 'copy-react-dom', 'eslint'], function() {
  return gulp.src(jsFiles.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    .pipe(babel({
      "plugins": ["transform-react-jsx"],
      only: PATHS.JS,
      compact: false
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(PATHS.DEST));
});

// Compile Sass to CSS
gulp.task('sass', function() {
  const autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  const filterOptions = '**/*.css';

  const reloadOptions = {
    stream: true,
  };

  const sassOptions = {
    includePaths: [

    ]
  };

  return gulp.src(PATHS.SCSS)
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(filter(filterOptions))
    .pipe(reload(reloadOptions));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,jsx}', ['concat']);
  gulp.watch(PATHS.SCSS, ['sass']);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['sass', 'copy-js-vendor', 'concat']);
gulp.task('default', ['build', 'browsersync', 'watch']);