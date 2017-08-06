'use strict';

var gulp=require('gulp'),
    browserSync=require('browser-sync').create(),
    rimraf=require('rimraf'),
    uglify=require('gulp-uglify'),
    /*concat=require('gulp-concat'),*/
    sourcemaps=require('gulp-sourcemaps'),
    prefixer=require('gulp-autoprefixer'),
    rigger=require('gulp-rigger'),
    imagemin=require('gulp-imagemin'),
    pngquant=require('imagemin-pngquant'),
    cssmin=require('gulp-minify-css');

var path={
    build:{
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        video: 'build/video/'
    },
    src:{
        html: 'src/*.html',
        js: 'src/js/*.js',
        css: 'src/css/*.css',
        img: 'src/img/*.*',
        fonts: 'src/fonts/*.*',
        video: 'src/video/*.*'
    },
    clean:'./build'
};

var config={
    server:{
        baseDir: './build'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000
}

gulp.task('server', function(){
    browserSync.init(config);
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

gulp.task('html:build', function(){
    return gulp.src(path.src.html)
                .pipe(gulp.dest(path.build.html))
});

gulp.task('js:build', function(){
    return gulp.src(path.src.js)
                .pipe(sourcemaps.init())
                .pipe(uglify())
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.build.js))
});

gulp.task('fonts:build', function(){
    return gulp.src(path.src.fonts)
                .pipe(gulp.dest(path.build.fonts))
});

gulp.task('video:build', function(){
    return gulp.src(path.src.video)
                .pipe(gulp.dest(path.build.video))
});

gulp.task('image:build', function(){
    return gulp.src(path.src.img)
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()],
                    interlaced: true
                }))
                .pipe(gulp.dest(path.build.img))
});

gulp.task('style:build', function(){
    return gulp.src(path.src.css)
            .pipe(sourcemaps.init())
            .pipe(prefixer())
            .pipe(cssmin())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css))
});

gulp.task('clean', function del(cb){
	return rimraf('build', cb);
});

gulp.task('watch', function(){
	gulp.watch(path.src.html, gulp.series('html:build'));
	gulp.watch(path.src.css, gulp.series('style:build'));
	gulp.watch(path.src.js, gulp.series('js:build'));
});

gulp.task('build', gulp.series(
			'clean',
			gulp.parallel('html:build', 'style:build', 'js:build', 'fonts:build', 'image:build', 'video:build'))
);

gulp.task('default', gulp.series(
			'build',
            gulp.parallel('watch', 'server')
));
