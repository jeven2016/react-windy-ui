var rimraf = require('rimraf');

var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
const filter = require('gulp-filter');
var spawn = require('child_process').spawn;

function shell(commandLine, cb) {
  const cmds = commandLine.split(' ');
  const command = cmds.shift();
  var options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: [0, 1, 2],
    shell: true
  };
  var child = spawn(command, cmds, options);

  var result = '';

  child.stdout &&
    child.stdout.on('data', (data) => {
      result += data;
    });

  child.on('close', (code) => {
    code === 0 && cb(result);
    cb(new Error(`Child process has error: code ${code}`));
  });
}

gulp.task('clean:dist', (cb) => {
  rimraf(`${path.resolve(process.cwd(), 'dist')}/*`, cb);
});

gulp.task('build:js', (cb) => {
  shell(`yarn cross-env NODE_ENV=production ./node_modules/.bin/babel src/ --out-dir dist`, cb);
});

// tsc检查
gulp.task('tsc', (cb) => {
  shell(`tsc`, cb);
});

gulp.task('copy:tsd', () => gulp.src('src/**/*.d.ts').pipe(gulp.dest('dist')));

const themPath = process.cwd().replace('/components', '') + '/wui/dist/**/*.css';
gulp.task('copy:themes', () => {
  console.log('theme=' + themPath);
  return gulp
    .src(themPath)
    .pipe(filter('*.min.css')) // filter the min files and not setting restore: true
    .pipe(
      rename(function (path) {
        path.basename = path.basename.replace('.min', '');
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('../docs/public'));
});

//compile components
gulp.task('build', gulp.series('clean:dist', 'tsc', 'build:js', 'copy:tsd', 'copy:themes'));
