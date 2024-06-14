import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    // Ищем файлы шрифтов .otf и .eot
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.{otf,eot}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        }))
    )
    // Конвертируем в .ttf
    .pipe(fonter({
        formats: ['ttf']
    }))
    // Выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    // Ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        }))
    )
    // Конвертируем в .woff
    .pipe(fonter({
        formats: ['woff']
    }))
    // Выгружаем в папку c результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    // Ищем файлы шрифтов .ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    // Конвертируем в .woff2
    .pipe(ttf2woff2())
    // Выгружаем в папку c результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    // Файл стилей подлючения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    // Проверяем существуют ли файлы шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // Проверяем существует ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // Если файла нет, создаём его
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    // Записываем подключения шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split('.')[0];
                    console.log(fontFileName);
                    if (newFileOnly !== fontFileName) {

                        // Опционально, обрезает имя шрифта до символа "-" ("Roboto"), если символа нет то просто записывет полное имя шрифта ("Roboto-Bold")
                        // let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;

                        // Опционально, обрезает имя шрифта после символа "-" ("Bold"), если символа нет то просто записывет полное имя шрифта ("Roboto-Bold")
                        // let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        
                        let fontName = fontFileName;
                        let fontWeight = fontFileName;
                        fontWeight = fontWeight.toLowerCase();

                        if (fontWeight.includes('thin')) {
                            fontWeight = 100;
                        }
                        else if (fontWeight.includes('extralight')) {
                            fontWeight = 200;
                        }
                        else if (fontWeight.includes('light')) {
                            fontWeight = 300;
                        }
                        else if (fontWeight.includes('medium')) {
                            fontWeight = 500;
                        }
                        else if (fontWeight.includes('semibold')) {
                            fontWeight = 600;
                        }
                        else if (fontWeight.includes('bold')) {
                            fontWeight = 700;
                        }
                        else if (fontWeight.includes('extrabold') || fontWeight.includes('heavy')) {
                            fontWeight = 800;
                        }
                        else if (fontWeight.includes('black')) {
                            fontWeight = 900;
                        }
                        else {
                            fontWeight = 400;
                        }
                        // Понятный для ознакомления вариант
                        /* fs.appendFile(fontsFile,
                            `@font-face {
                                font-family: ${fontName};
                                font-display: swap;
                                src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                                font-weight: ${fontWeight};
                                font-style: normal;
                            }\r\n`, cb); */
                        
                        // Оптимизированный вариант с табуляцией для красивого импорта в файл шрифтов
                        fs.appendFile(fontsFile,`@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } 
            else {
                // Если файл есть, выводим сообщение
                console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}