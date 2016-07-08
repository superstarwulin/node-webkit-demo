var gulp = require('gulp');
var gutil = require('gulp-util');
var builder = require('gulp-node-webkit-builder');

gulp.task('scripts', function() {
    return gulp.src(['./file-explorer/**/*'])
        .pipe(builder({
            version: 'v0.11.0',
            platforms: ['osx64']
        }));
});

//gulp.task('nw', function () {
//
//    var nw = new NwBuilder({
//        version: '0.11.0',
//        files: ['./example/**/**'],
//        macPlist: {mac_bundle_id: 'myPkg'},
//        platforms: [ 'win64', 'osx64']
//    });
//
//    // Log stuff you want
//    nw.on('log', function (msg) {
//        gutil.log('nw-builder', msg);
//    });
//
//    // Build returns a promise, return it so the task isn't called in parallel
//    return nw.build().catch(function (err) {
//        gutil.log('nw-builder', err);
//    });
//});

gulp.task('default', ['scripts']);