const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

const paths = {
  html: {
    src: ["./src/**/*.html"],
    dest: "./dist/",
  },
  styles: {
    src: ["./src/scss/**/*.scss"],
    dest: "./dist/assets/css/",
  },
  scripts: {
    src: ["./src/js/**/*.js"],
    dest: "./dist/assets/js/",
  },
  // images: {
  //   src: ["./src/images/**/*"],
  //   dest: "./dist/assets/images/",
  // },
};

// sass task
function scssTask() {
  return src(paths.styles.src, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest(paths.styles.dest, { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src(paths.scripts.src)
    .pipe(terser())
    .pipe(dest(paths.scripts.dest, { sourcemaps: "." }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html",
    },
    // injectChanges: true,
  });
  cb();
}
7;

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function copyHtml() {
  return src(paths.html.src).pipe(dest(paths.html.dest));
}

// Watch Task
function watchTask() {
  watch(paths.html.src, browsersyncReload);
  watch(
    ["./src/scss/**/*.scss", "./src/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask,
  copyHtml
);

exports.copyHtml = copyHtml;
