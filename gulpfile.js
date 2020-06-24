const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const shorthand = require('gulp-shorthand');
const less = require('gulp-less');
const config = {
	src: './src', // корень папки
	css: {
		watch: '/precss/**/*.less',
		src: '/precss/style.less',
		dest: '/css'
	},
	html: {
		src: '/index.html'
	},
	js: {
		src: '/js/**/*.js'
	}
}; 

gulp.task('build', function(){ 
	gulp.src(config.src + config.css.src)      
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(shorthand())
	.pipe(gcmq())
	.pipe(autoprefixer({
            browsers: ['last 2 versions'], 
            cascade: false
        }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(config.src + config.css.dest))  
	.pipe(browserSync.stream());
});

gulp.task('watch', ['browserSync'], function(){ 
		gulp.watch(config.src + config.html.src, browserSync.reload); // для перезагрузки index.html
		gulp.watch(config.src + config.js.src, browserSync.reload); // для перезагрузки скрипта
		gulp.watch(config.src + config.css.watch, ['build']); 
	}); 

//===============задача под browser-sync===================================
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.src 
        }
    });
});
