import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // CSS file compression
import webpCss from 'gulp-webpcss'; // Output WEBP images
import autoPrefixer from 'gulp-autoprefixer'; // Adding vendor prefixes
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Grouping media queries

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.if(
        app.isBuild,
        groupCssMediaQueries()
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        webpCss({
            webpClass: ".webp", // If the browser supports the webp format, it adds the .webp class
            noWebpClass: ".no-webp" // If the browser does not support the webp format, then it adds the .no-webp class
        })
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        })
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        cleanCss()
    ))
    .pipe(app.gulp.dest(app.path.build.css)) // A copy of the uncompressed styles file to test the resulting file
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}