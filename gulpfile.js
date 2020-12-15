let gulp = require('gulp'),/* это пищется для сокращенного ввода gulp */
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),/* подключам что бы код автоматически обнавлялся в браузере */
    autoprefixer = require('gulp-autoprefixer'),/* подключаем автопрефиксер что бы более старые браузеры смогли работать */
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');

gulp.task('sass', function(){/* эта функция конвертирует scss в css */
   return gulp.src('app/scss/**/*.scss')/* выбираем фал с котором нужно что то сделать  */
           .pipe(sass({outputStyle: 'compressed'}))/* сдесь все конферитруется */
           .pipe(rename({suffix : '.min'}))/* функция переименовывает в стаилмин */
           .pipe(autoprefixer({
               boverrideBrowserslist: ['last 8 versions']/* указывае до каких версий наш код будет поддерживать браузеры */
           }))
           .pipe(gulp.dest('app/css'))/* и сюда выпадает */
           .pipe(browserSync.reload({stream: true}))/* задаем автообновление в браузере для css */
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/rateyo/lib/cjs/jquery.rateyo.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css'
    ])
            .pipe(concat('libs.min.css'))
            .pipe(cssmin())
            .pipe(gulp.dest('app/css'))
 });

gulp.task('script', function(){
   return gulp.src([
       'node_modules/slick-carousel/slick/slick.js',
       'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
       'node_modules/mixitup/dist/mixitup.js',
       'node_modules/rateyo/lib/cjs/jquery.rateyo.js',
       'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js'
       
   ])
           .pipe(concat('libs.min.js'))
           .pipe(uglify())
           .pipe(gulp.dest('app/js'))
});

gulp.task('html', function(){/* подключили автоматическое обновление браузерв в html */
  return gulp.src('app/*.html')
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){/* подключили автоматическое обновление браузерв в js */
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
  });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))/* будут автоматически при изменинии в scss конвертировать в css */
    gulp.watch('app/*.html', gulp.parallel('html'))/* будет следить за изменениями в нтмл */
    gulp.watch('app/js/*.js', gulp.parallel('js'))/* будет следить за изменениями в js */
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))/* делаем что бы все наши команды обробатывались параллельно */