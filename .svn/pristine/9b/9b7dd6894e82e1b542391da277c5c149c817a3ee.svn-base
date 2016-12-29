/// <binding />
"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concatCss = require('gulp-concat-css');
const watch = require("gulp-watch");
const tslint = require('gulp-tslint');;
const del = require("del");
const systemjsBuilder = require('systemjs-builder');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');

gulp.task('bundle:js-manuell', function () {
	var builder = new systemjsBuilder('', './Scripts/system.config.js');
	return builder.buildStatic('wwwroot/app/main.js', 'wwwroot/bundle/app.min.js', { minify: true });
});

gulp.task('bundle:js', function () {
	return watch('wwwroot/app/**/*.ts', function () {
		var builder = new systemjsBuilder('', './Scripts/system.config.js');
		return builder.buildStatic('wwwroot/app/main.js', 'wwwroot/bundle/app.min.js', { minify: true });
	});
});

gulp.task('cms-module-bundle', function() {
	var builder = new systemjsBuilder('', './Scripts/system.config.js');
	return builder.buildStatic('wwwroot/app/module/cms.module.js', 'wwwroot/bundle/cms.min.js', { minify: true });
});

gulp.task('copy:css-lib', function () {
	return gulp.src('CSS/bootstrap/*.css')
		.pipe(gulp.dest('wwwroot/css/1_frameworks'));
});

gulp.task('copy:css', ['copy:css-lib'], function () {
	return gulp.src('CSS/**/*.less')
				.pipe(less())
				.pipe(gulp.dest('wwwroot/css/'));
});

gulp.task('bundle:css-manuell', ['copy:css'], function () {
	return gulp.src('wwwroot/css/**/*.css')
			.pipe(concatCss("site.min.css"))
			.pipe(gulp.dest('wwwroot/bundle/'));
});


gulp.task('bundle:css', function () {
	return watch('CSS/**/*.*', ['copy:css'], function () {
		return gulp.src('wwwroot/css/**/*.css')
			.pipe(concatCss("site.min.css"))
			.pipe(gulp.dest('wwwroot/bundle/'));
	});
});