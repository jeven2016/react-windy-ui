var cssnano = require('cssnano');
var fs = require('fs');
var gulp = require('gulp');
var console = require('better-console');
var sass = require('gulp-sass')(require('sass'));
var path = require('path');
var del = require('del');
var rimraf = require('rimraf');
const filter = require('gulp-filter');

// plugins
var concat = require('gulp-concat');
var header = require('gulp-header');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sassGlob = require('gulp-sass-glob');
var merge = require('merge-stream');
var wait = require('gulp-wait');
var watch = require('gulp-watch');
var minimist = require('minimist'); //parse the command line parameters

var buildConfig = require('./config/build-elements');
var pkg = require('./package.json');

var global = {
  name: 'wui',
  dist: 'dist/',
  banner: [
    '/*!',
    ' * <%= pkg.name %> -<%= pkg.homepage %>',
    ' * Version - <%= pkg.version %>',
    ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= pkg.author %>',
    ' */\n'
  ].join('\n')
};

var scssDirs = buildConfig.scssFile;

//the params passed through gulp command line
var params = minimist(process.argv.slice(2), {
  string: ['copyTo'],
  boolean: [],
  default: { copyTo: null }
});

function solveFileName(file) {
  return file.startsWith('/') ? path.substring(1, file.length) : file;
}

function invalidFile(file) {
  throw new Error('The file is invalid: ' + file);
}

function getFileNames(prefix, file) {
  if (typeof file === 'string') {
    return solveFileName(file);
  }

  if (Array.isArray(file)) {
    if (file.length === 0) {
      invalidFile(file);
    }
    return file.map(function (item) {
      return prefix + item;
    });
  }
  invalidFile(file);
}

function getFiles(dirConfig) {
  if (!dirConfig) {
    console.log('The config is ignored.');
    return [];
  }
  if (!dirConfig.hasOwnProperty('path')) {
    console.error('No path variable defined in your config');
    return [];
  }

  if (dirConfig.hasOwnProperty('file')) {
    var dirPath = dirConfig.path;
    dirPath = dirPath.endsWith('/') ? dirPath : dirPath.concat('/');
    return getFileNames(dirPath, dirConfig.file);
  }

  var elemConfig = dirConfig.config;
  var fileList = [];
  fs.readdirSync(dirConfig.path).forEach(function (fileName) {
    if (!fileName.endsWith('.scss')) {
      console.log('The directory is ignored:' + fileName);
      return;
    }

    if (!elemConfig) {
      fileList.push(dirConfig.path + '/' + fileName);
      return;
    }

    var pureName = fileName.replace('_', '').replace('.scss', '');
    if (!elemConfig.hasOwnProperty(pureName)) {
      console.warn(fileName + ") is ignored because it isn't enabled in config file.");
    }
    var enabled = elemConfig[pureName];
    if (enabled) {
      fileList.push(dirConfig.path + '/' + fileName);
    }
  });
  //parse multiple files
  return fileList;
}

gulp.task('clean', function () {
  return del([global.dist + '**']);
});

gulp.task('addDefaultHeader', function () {
  return gulp
    .src('dist/*.css')
    .pipe(header(global.banner, { pkg: pkg }))
    .pipe(gulp.dest(global.dist + 'default'));
});

gulp.task('cleanUncompressedFiles', function (cb) {
  return rimraf('dist/!(wui*.min.css', cb);
});

gulp.task('buildDefault', function () {
  console.info('>>>>  Begin to compile the default theme................');
  var scssFiles = getFiles(scssDirs.base)
    .concat(getFiles(scssDirs.mixin))
    .concat(getFiles(scssDirs.common))
    .concat(getFiles(scssDirs.elems));

  console.info('The following files will be compiled:');
  console.info(scssFiles);

  return gulp
    .src(scssFiles)
    .pipe(sassGlob())
    .pipe(concat(global.name + '.scss'))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(global.dist))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(global.name + '.min.css'))
    .pipe(gulp.dest(global.dist));
});

function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

gulp.task('buildThemes', function () {
  console.info('>>>>  Begin to compile themes................');
  var tskArray = getFolders(scssDirs.themes.path).map(function (dirName) {
    var variableFile = path.join(scssDirs.themes.path, dirName, scssDirs.variableFile).toString();

    var scssFiles = getFiles(scssDirs.base)
      .concat(variableFile)
      .concat(getFiles(scssDirs.mixin))
      .concat(getFiles(scssDirs.common))
      .concat(getFiles(scssDirs.elems));

    console.info('The following files will be compiled for theme wui-' + dirName + ':');
    console.info(scssFiles);

    return gulp
      .src(scssFiles)
      .pipe(wait(2000))
      .pipe(sassGlob())
      .pipe(concat(global.name + '-' + dirName + '.css'))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(global.dist))
      .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
      .pipe(rename(global.name + '-' + dirName + '.min.css'))
      .pipe(gulp.dest(global.dist));
  });

  return merge(tskArray);
});

const themPath = process.cwd() + '/dist/**.css';
console.log('themPath=' + themPath);

gulp.task('copy', () => {
  console.log('themPath=' + themPath);
  return gulp
    .src(themPath)
    .pipe(filter('*.min.css')) // filter the min files and not setting restore: true
    .pipe(
      rename(function (path) {
        path.basename = path.basename.replace('.min', '');
      })
    )
    .pipe(gulp.dest('../components/dist'))
    .pipe(gulp.dest('../docs/public'));
});

//watch the changes of scss files and trigger building task
gulp.task('watch', function () {
  var tasks = ['default', 'buildThemes'];
  if (params.buildAll) {
    tasks.push('buildThemes');
  }
  tasks.push('copy');

  return watch('src/**/*.scss', function () {
    console.log('>> update watched');
    gulp.series(tasks)();
  });
});

gulp.task('default', gulp.series('clean', 'buildDefault'));
