const publishDir = "//Vm-mvr-eau2-ap1.dev.local/sppteau/01.DEV/03 WebApplications/UI/PublicPortal";
const reactDir = "../../EAU.Web.Portal.App/client-app/src/assets/css/";
const identityServerDir = "../../EAU.Web.IdentityServer/wwwroot/css/";

const gulp = require('gulp');

const gulpSass = require('gulp-sass');

const gulpAutoprefixer = require('gulp-autoprefixer');

const gulpCleanCSS = require('gulp-clean-css');

const gulpSourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();

const del = require('del');

function sass() {
    return gulp.src(['./src/scss/style.scss','./src/scss/print.scss'])
        .pipe(gulpSourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({
            cascade: false
        }))
        //.pipe(gulpCleanCSS())
        .pipe(gulpSourcemaps.write('./'))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream())
}

function build() {

    del(['./build/css/style.css.map']);
    del(['./build/css/print.css.map']);

	return gulp.src(['./src/scss/style.scss','./src/scss/print.scss'])
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({
            cascade: false
        }))
        // .pipe(gulpCleanCSS())
        .pipe(gulp.dest('./build/css/'));
}

function push() {
	return gulp.src('./src/scss/style.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./build/css/'))
        .pipe(gulp.dest(reactDir))
        .pipe(gulp.dest(identityServerDir));
}

function watch() {    
    gulp.watch('./src/scss/**/*.scss', sass);
    gulp.watch("./build/**/*.html").on('change', browserSync.reload);
}

function serv() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./build",
            directory: true
        }
    });

    watch();
}

function publish(cb) {

    del.sync([publishDir],{force: true});

    gulp.src(['./build/**/*','!./build/**/*.map','!./build/**/old*/**'])
    .pipe(gulp.dest(publishDir));

    console.log('\x1b[41m', 'Folder replaced from local source!'); 
    console.log(publishDir, '\x1b[40m'); 

    cb();
}


exports.sass = sass;        // Компилира style.scss без да е минимизиран. Добавя map файл.
exports.build = build;      // Компилира style.scss. Не включва map файл.
exports.push = push;        // Компилира style.scss. Копира го в папката на react app.
exports.watch = watch;      // Следи за промени в scss файловете и компилира с команда sass
exports.serv = serv;        // Стартира web server. При промяна в scss и html файлове презарежда съдържанието на прозорците отворени през web server-a. Компилира scss с команда sass.

exports.publish = gulp.series(build, publish);      // Компилира и копира проекта в конфигурираната папка

exports.default = build;