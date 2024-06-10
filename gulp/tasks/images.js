import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images), { encoding: false })
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg)) // Если не используете svg изображения, то закомментируете эту строку
    .pipe(app.gulp.dest(app.path.build.images)) // и эту тоже, иначе получите ошибку
    .pipe(app.plugins.browserSync.stream());
}