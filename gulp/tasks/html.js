import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
//import pug from 'gulp-pug'; // При работе с PUG раскомментировать эту строку кода

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(fileInclude())    // При работе с PUG закомментировать эту строку кода
        /* .pipe(pug({          // И раскомментировать этот блок с кодом
            // Сжатие HTML файла
            pretty: true,
            // Показывать в терминале какой файл обработан
            verbose: true
         })) */
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(webpHtmlNosvg())
        .pipe(
            versionNumber({
                'value': '%DT%',    // Выводить текущую дату и время
                'append': {         // Вставить в конец значение
                    'key': '_v',    // Ключ перед значением
                    'cover': 0,     // Покрытие или замена значения нам не нужно
                    'to': [         // Применять значение к файлам "css" и "js"
                        'css',      
                        'js',       
                    ]
                },
                'output': {         // Создать файл со значением текущей даты
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}