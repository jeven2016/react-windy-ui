//add type: 'module' into package.json to support ES syntax
var rimraf = require('rimraf');

var gulp = require('gulp');
var path = require('path');
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

gulp.task('tsc', (cb) => {
  shell(`tsc`, cb);
});

gulp.task('copy:tsd', () => gulp.src('src/**/*.d.ts').pipe(gulp.dest('dist')));

const themPath = process.cwd().replace('/components', '') + '/Wui/dist/**/*.css';
gulp.task('copy:theme', () => gulp.src(themPath).pipe(gulp.dest('dist')));

//compile components
gulp.task('build', gulp.series('clean:dist', 'tsc', 'build:js', 'copy:tsd', 'copy:theme'));
