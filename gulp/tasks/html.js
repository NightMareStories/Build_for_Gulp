import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
//import pug from 'gulp-pug'; // When working with PUG, uncomment this line of code

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(fileInclude())    // When working with PUG, comment out this line of code
        /* .pipe(pug({          // and uncomment this block with code
            // HTML file compression
            pretty: true,
            // Show in the terminal which file has been processed
            verbose: true
         })) */
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild,
            webpHtmlNosvg()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',    // Display current date and time
                'append': {         // Insert value at end
                    'key': '_v',    // Key before value
                    'cover': 0,     // We don't need to cover or replace the value
                    'to': [         // Apply value to "css" and "js" files
                        'css',      
                        'js',       
                    ]
                },
                'output': {         // Create a file with the current date value
                    'file': 'gulp/version.json'
                }
            })
        ))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}