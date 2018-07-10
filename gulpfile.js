/* Pug Extended Sublime Syntax */

const gulp = require('gulp');
const path = require('path');
const del = require('del');
const runSequence =  require('run-sequence');
const req = require('require-yml');
const stats = require('gulp-stats');
const colors = require('colors');
const yrgv = require('yargs');
const _ = require('lodash');

const conventionalGithubReleaser = require('conventional-github-releaser');
const conventionalChangelog = require('gulp-conventional-changelog');

const paths = {
  'src': './src',
  'dist': './',
  'utils': './src/utils',
  
  'commands': `./src/commands`,
  'completions': `./src/completions`,
  'builds': `./src/builds`,
  'menus': `./src/menus`,
  'prefs': `./src/prefs`,
  'syntax': `./src/syntax`,
  
  'Commands': './Commands',
  'Completions': './Completions',
  'Builds': './Builds',
  'Menus': './Menus',
  'Preferences': './Preferences',
  'Syntaxes': './Syntaxes'
};

const $ = require('gulp-load-plugins')();
const pug = req(`${paths.src}/settings.yml`);
const pkg = require(`${paths.dist}/package.json`);
const argv = yrgv.argv;

stats(gulp);

gulp.task('clean:commands', () => {
  return del([`${paths.Commands}/*.sublime-commands`]);
});

gulp.task('clean:builds', () => {
  return del([`${paths.Builds}/*.sublime-build`]);
});

gulp.task('clean:menus', () => {
  return del([`${paths.Menus}/*.sublime-menu`]);
});

gulp.task('clean:prefs', () => {
  return del([`${paths.Preferences}/*.tmPreferences`]);
});

gulp.task('clean:completions', () => {
  return del([`${paths.Completions}/*.sublime-completions`]);
});

gulp.task('clean:syntax', () => {
  return del([`${paths.Syntax}/*.sublime-syntax`]);
});

gulp.task('clean', (cb) => {
  return runSequence(
    'clean:commands',
    'clean:builds',
    'clean:menus',
    'clean:prefs',
    'clean:completions',
    'clean:syntax',
    (error) => {
      if (error) {
        console.log('[clean]'.bold.magenta + ' There was an issue cleaning files:\n'.bold.red + error.message);
      } else {
        console.log('\n[clean]'.bold.magenta + ' Finished successfully \n'.bold.green);
      }
      cb(error);
    }
  )
});

gulp.task('build:builds', () => {
  var builds = pug.builds;
  return gulp.src(`${paths.builds}/index.yml`)
    .pipe($.imports())
    .pipe($.data(() => {
      return builds
    }))
    .pipe($.yaml({space: 2}))
    .pipe($.rename((path) => {
      path.basename = builds.pug.name
      path.extname = builds.ext
    }))
    .pipe(gulp.dest(paths.Builds))
});

gulp.task('build:commands', () => {
  var commands = pug.commands;
  return gulp.src(`${paths.commands}/index.yml`)
    .pipe($.imports())
    .pipe($.data(() => {
      return commands;
    }))
    .pipe($.yaml({space: 2}))
    .pipe($.rename((path) => {
      path.basename = commands.default.name
      path.extname = commands.ext
    }))
    .pipe(gulp.dest(paths.Commands))
});

gulp.task('build:completions:tags', () => {
  var completions = pug.completions.tags
  var banner = [
    `/**`,
    ` * ${pug.name} - ${pug.description}`,
    ` * @version v${pkg.version}`,
    ` * @homepage ${pkg.repository.url}`,
    ` * @issues ${pkg.bugs.url}`,
    ` */\n`
  ].join('\n');
  return gulp.src([`${paths.completions}/tags.yml`])
    .pipe($.imports())
    .pipe($.yaml({ space: 2 }))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: completions.name,
      extname: pug.completions.ext
    }))
    .pipe(gulp.dest(`${paths.Completions}`))
});

gulp.task('build:completions:attributes', () => {
  var completions = pug.completions.attributes
  var banner = [
    `/**`,
    ` * ${pug.name} - ${pug.description}`,
    ` * @version v${pkg.version}`,
    ` * @homepage ${pkg.repository.url}`,
    ` * @issues ${pkg.bugs.url}`,
    ` */\n`
  ].join('\n');
  return gulp.src([`${paths.completions}/attributes.yml`])
    .pipe($.imports())
    .pipe($.yaml({ space: 2 }))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: completions.name,
      extname: pug.completions.ext
    }))
    .pipe(gulp.dest(`${paths.Completions}`))
});

gulp.task('build:completions:keywords', () => {
  var completions = pug.completions.keywords
  var banner = [
    `/**`,
    ` * ${pug.name} - ${pug.description}`,
    ` * @version v${pkg.version}`,
    ` * @homepage ${pkg.repository.url}`,
    ` * @issues ${pkg.bugs.url}`,
    ` */\n`
  ].join('\n');
  return gulp.src([`${paths.completions}/keywords.yml`])
    .pipe($.imports())
    .pipe($.yaml({ space: 2 }))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: completions.name,
      extname: pug.completions.ext
    }))
    .pipe(gulp.dest(`${paths.Completions}`))
});

gulp.task('build:completions:filters', () => {
  var completions = pug.completions.filters
  var banner = [
    `/**`,
    ` * ${pug.name} - ${pug.description}`,
    ` * @version v${pkg.version}`,
    ` * @homepage ${pkg.repository.url}`,
    ` * @issues ${pkg.bugs.url}`,
    ` */\n`
  ].join('\n');
  return gulp.src([`${paths.completions}/filters.yml`])
    .pipe($.imports())
    .pipe($.yaml({ space: 2 }))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: completions.name,
      extname: pug.completions.ext
    }))
    .pipe(gulp.dest(`${paths.Completions}`))
});

gulp.task('build:completions:jsdoc', () => {
  var completions = pug.completions.jsdoc
  var banner = [
    `/**`,
    ` * ${pug.name} - ${pug.description}`,
    ` * @version v${pkg.version}`,
    ` * @homepage ${pkg.repository.url}`,
    ` * @issues ${pkg.bugs.url}`,
    ` */\n`
  ].join('\n');
  return gulp.src([`${paths.completions}/jsdoc.yml`])
    .pipe($.imports())
    .pipe($.yaml({ space: 2 }))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: completions.name,
      extname: pug.completions.ext
    }))
    .pipe(gulp.dest(`${paths.Completions}`))
});

gulp.task('build:completions', (cb) => {
  return runSequence(
    'build:completions:tags',
    'build:completions:attributes',
    'build:completions:keywords',
    'build:completions:filters',
    'build:completions:jsdoc',
    (e) => {
      if (e) {
        console.log('\n[build:completions]'.bold.magenta + ' There was an issue building completions:\n'.bold.red + e.message)
      } else {
        console.log('\n[build:completions]'.bold.magenta + ' Finished successfully \n'.bold.green)
      }

      cb(e);
    }
  )
})

gulp.task('build:syntax:pug', () => {
  var syntax = pug.syntax.pug;
  return gulp.src([`${paths.syntax}/pug.yml`])
    .pipe($.imports())
    .pipe($.data(() => {
      return syntax = syntax;
    }))
    .pipe($.rename({
      basename: syntax.name,
      extname: pug.syntax.ext
    }))
    .pipe(gulp.dest(`${paths.Syntaxes}`))
});

gulp.task('build:syntax:pypug', () => {
  var syntax = pug.syntax.pypug;
  return gulp.src([`${paths.syntax}/pypug.yml`])
    .pipe($.imports())
    .pipe($.data(() => {
      return syntax = syntax;
    }))
    .pipe($.rename({
      basename: syntax.name,
      extname: pug.syntax.ext
    }))
    .pipe(gulp.dest(`${paths.Syntaxes}`))
});

gulp.task('build:syntax', (cb) => {
  return runSequence(
    'build:syntax:pug',
    'build:syntax:pypug',
    (e) => {
      if (e) {
        console.log('\n[build:syntax]'.bold.magenta + ' There was an issue building syntax:\n'.bold.red + e.message)
      } else {
        console.log('\n[build:syntax]'.bold.magenta + ' Finished successfully \n'.bold.green)
      }
      
      cb(e);
    }
  )
})

gulp.task('build:menus:main', () => {
  var menus = pug.menus.main;
  return gulp.src(`${paths.menus}/main.yml`)
    .pipe($.imports())
    .pipe($.yaml({space: 2}))
    .pipe($.rename((path) => {
      path.basename = menus.name
      path.extname = pug.menus.ext
    }))
    .pipe(gulp.dest(paths.Menus))
});

gulp.task('build:menus:context', () => {
  var menus = pug.menus.context;
  return gulp.src(`${paths.menus}/context.yml`)
    .pipe($.imports())
    .pipe($.yaml({space: 2}))
    .pipe($.rename((path) => {
      path.basename = menus.name
      path.extname = pug.menus.ext
    }))
    .pipe(gulp.dest(paths.Menus))
});

gulp.task('build:menus', (cb) => {
  return runSequence(
    'build:menus:main',
    'build:menus:context',
    (e) => {
      if (e) {
        console.log('\n[build:menus]'.bold.magenta + ' There was an issue building menus:\n'.bold.red + e.message)
      } else {
        console.log('\n[build:menus]'.bold.magenta + ' Finished successfully \n'.bold.green)
      }
      
      cb(e);
    }
  )
})

gulp.task('build:prefs:comments', () => {
  var prefs = pug.prefs.comments;
  var banner = [
    `<!--`,
    `* ${pug.name} - ${pug.description}`,
    `* @author ${pug.author}`,
    `* @version v${pkg.version}`,
    `* @homepage ${pkg.repository.url}`,
    `* @issues ${pkg.bugs.url}`,
    `-->\n`
  ].join('\n');
  return gulp.src([`${paths.prefs}/comments.pug`])
    .pipe($.pug({pretty: true}))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: prefs.name,
      extname: pug.prefs.ext
    }))
    .pipe(gulp.dest(`${paths.Preferences}`))
});

gulp.task('build:prefs:misc', () => {
  var prefs = pug.prefs.misc;
  var banner = [
    `<!--`,
    `* ${pug.name} - ${pug.description}`,
    `* @author ${pug.author}`,
    `* @version v${pkg.version}`,
    `* @homepage ${pkg.repository.url}`,
    `* @issues ${pkg.bugs.url}`,
    `-->\n`
  ].join('\n');
  return gulp.src([`${paths.prefs}/misc.pug`])
    .pipe($.pug({pretty: true}))
    .pipe($.header(banner, { pug: pug, pkg: pkg}))
    .pipe($.rename({
      basename: prefs.name,
      extname: pug.prefs.ext
    }))
    .pipe(gulp.dest(`${paths.Preferences}`))
});

gulp.task('build:prefs', (cb) => {
  return runSequence(
    'build:prefs:comments',
    'build:prefs:misc',
    (e) => {
      if (e) {
        console.log('\n[build:prefs]'.bold.magenta + ' There was an issue building preferences:\n'.bold.red + e.message)
      } else {
        console.log('\n[build:prefs]'.bold.magenta + ' Finished successfully \n'.bold.green)
      }
      
      cb(e);
    }
  )
})

gulp.task('build',['clean'], (cb) => {
  return runSequence(
    'build:builds',
    'build:commands',
    'build:menus',
    'build:prefs',
    'build:completions',
    'build:syntax',
    (error) => {
      if (error) {
        console.log('[build]'.bold.magenta + ' There was an issue building files:\n'.bold.red + error.message);
      } else {
        console.log('\n[build]'.bold.magenta + ' Finished successfully \n'.bold.green);
      }
      cb(error);
    }
  )
});

gulp.task('bump-env-version', () => {
  return gulp.src(`${paths.utils}/info.py`)
    .pipe($.if((Object.keys(argv).length === 4), $.bump({ key: '__version__' })))
    .pipe($.if(argv.minor, $.bump({ type: 'minor', key: '__version__' })))
    .pipe($.if(argv.major, $.bump({ type: 'major', key: '__version__' })))
    .pipe(gulp.dest(`${paths.utils}`));
});


gulp.task('bump-pkg-version', () => {
  return gulp.src([`./package.json`])
    .pipe($.if((Object.keys(argv).length === 4), $.bump()))
    .pipe($.if(argv.minor, $.bump({ type: 'minor' })))
    .pipe($.if(argv.major, $.bump({ type: 'major' })))
    .pipe(gulp.dest('./'));
});


gulp.task('bump', (cb) => {
  runSequence(
    'bump-pkg-version',
    'bump-env-version',
    (error) => {
      if (error) {
        console.log('\n[bump]'.bold.magenta + ' There was an issue bumping version:\n'.bold.red + error.message);
      } else {
        console.log('\n[bump]'.bold.magenta + ' Finished successfully \n'.bold.green);
      }
      cb(error);
    }
  );
});

gulp.task('changelog', () => {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular',
      releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('github-release', (done) => {
  conventionalGithubReleaser({
    type: 'oauth',
    token: process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN
  }, {
    preset: 'angular'
  }, done);
});

gulp.task('watch', ['build'], () => {
  gulp.watch(`${paths.commands}/**/*.yml`, ['clean:commands','build:commands']);
  gulp.watch(`${paths.builds}/**/*.yml`, ['clean:builds','build:builds']);
  gulp.watch(`${paths.menus}/**/*.yml`, ['clean:menus','build:menus']);
  gulp.watch(`${paths.prefs}/**/*.pug`, ['clean:prefs','build:prefs']);
  gulp.watch(`${paths.completions}/**/*.yml`, ['clean:completions','build:completions']);
  gulp.watch(`${paths.syntax}/**/*.yml`, ['clean:syntax','build:syntax']);
  gulp.watch("gulpfile.babel.js").on("change", () => process.exit(0));
});

gulp.task('default',['build']);