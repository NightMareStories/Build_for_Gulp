# Внимание!!! Данная сборка "Gulp" в этой ветке использует "новый" модульный подход согласно "ES6". Если вы используете "старый" функциональный подход в своих проектах, то перейдите в ветку "old_gulp"!
&nbsp;
# Данная документация актуальна только для ветки "new_gulp"!!!
&nbsp;

# Привет!
&nbsp;

---
## Это моя сборка для сборщика проектов "Gulp" с которой я постоянно работаю, используя её для своих проектов.
&nbsp;

### **1. `Cначала вам нужно установить `"[NodeJS](https://nodejs.org/)"` на ваш компьютер. Для того чтобы проверить его наличие на вашем "ПК", введите команду в терминале:`**

```
node --version 
```

```
npm --version
```

### `Если команды работают и выводят версии, то "Node" и "NPM" у вас уже установленны;`
### **2. `Перед установкой пакетов нужно сначала установить "Gulp" глобально в вашу систему:`**

```
npm i --global gulp-cli
```

### `А затем из папки с "gulpfile.js" установить все плагины из "package.json" с помощью команды в вашем терминале:`

```
npm i -D
```

### В данной сборке присутсвуют несколько важных задач, которые можно запустить вызвав их в терминале:

```
npm run task_name
```

### Вот эти задачи:

### 1. `gulp_dev` - режим разработки, запускает лишь необходимые задачи для работы над проектом;
### 2. `gulp_build` - полностью собирает и оптимизирует проект к отправке на сервер;
### 3. `gulp_zip` - создаёт архив с готовым проектом;
### 4. `gulp_deploy` - отправляет готовый проект на выделенный сервер;
### 5. `gulp_svgSprive` - отдельно собирает все "SVG" спрайты в один файл;

### В сборке имеются файлы-шаблоны (папка "src"), которые нужны лишь для демонстрации работы данной сборки. Просто удалите и замените их на свои файлы с которыми будете работать, НО не трогайте папку "js", так как в ней лежат файлы необходимые для работы сборки: "app.js" - основной подключаемый скрипт и "modules/functions.js" - модуль для правильной работы задачи "scss.js" (вывод webp-изображений), импортируемый в "app.js".
### Если вам нужно просто обработать некоторые файлы, к примеру изображения или шрифты, то просто переместите свои файлы в соответсвующие папки: шрифты в папку "fonts", а изображения в папку "img" (для объединения "SVG-спрайтов", поместите свои файлы в папку "svgicons").

### Затем просто запустите команду:

```
npm run gulp_build
```

### Она обработает ваши файлы и поместит в папку "dist", где вы можете их забрать и использовать в своём проекте.
---
&nbsp;

# 1. Введение
&nbsp;

---
### "Gulp" - многофункциональная программа для автоматического выполнения часто используемых задач, проще говоря, это сборщик проектов, но его функционал может быть шире этого определения, а  использоваться он может для выполнения различных операций. "Gulp" пользуется большой популярностью среди разработчиков, и благодаря простой и понятной конфигурации, с ним работают даже новички в "IT" отрасли. У "Gulp" есть подробная документация к различным модулям и функциям для работы с ним. 

### Я собрал свою сборку "Gulp" из различных модулей и функций нацеленную на фронт-энд разработку. В ней присутвуют: минимизация и оптимизация файлов "js", преобразование работы препроцессора "Sass" и "SCSS" к обычному "CSS" формату, сжатие и конвертация изображений, работа со шрифтами, модульное разделение "HTML" файлов на компоненты, а также, добавление префиксов "CSS", работа с "SVG" изображениями, работа с "webp" изображениями и другие полезные функции.  
---
&nbsp;

# 2. Ознакомление
&nbsp;

---
### Для начала по-подробнее про используемые модули:

### 1. "gulp" - очевидно необходим, чтобы всё работало;
### 2. "gulp-if" - используется для определения режима работы со сборкой, и на основе этого запускает нужные задачи по обработке файлов;
### 3. "gulp-pug" - нужен для работы с файлами препроцессора "PUG";
### 4. "gulp-file-include" - нужен для разделения на компоненты "html" файлов;
### 5. "sass" - препроцессор для работы с файлами "SCSS" и "Sass"; 
### 6. "gulp-sass" - для преобразования "SCSS" и "Sass" файлов в стандартный "CSS" формат;
### 7. "gulp-autoprefixer" - для добавления префиксов в "CSS" файлы, нужно для совместимости со старыми браузерами;
### 8. "gulp-group-css-media-queries" - группирует все медиа-правила (правила для разрешения экрана на устройстве) в одном месте для удобства;
### 9. "gulp-clean-css" - минимизирует "CSS" файлы удаляя все пробелы, файлы меньше весят после обработки;
### 10. "webpack" - минимизурует файлы "js" для экономии пространства на диске и быстрой загрузки скриптов, а также оптимизирует их под прошлые редакции кода для старых браузеров;
### 11. "webpack-stream" - позволяет использовать "webpack" внутри "Gulp";
### 12. "gulp-imagemin" - сжимает изображения делая их "легче" не теряя при этом качества;
### 13. "gulp-webp" - нужен для работы с "webp" изображениями;
### 14. "gulp-webp-html-nosvg" - добавляет в "html" файлы шаблон с "webp" изображением, не трогает "SVG" изображения;
### 15. "gulp-webp-css" - необходимо для работы с "webp" изображениями в "CSS";
### 16. "webp-converter" - конвертация изображений с различными форматами в формат "webp";
### 17. "gulp-svg-sprite" - для работы с "SVG" изображениями;
### 18. "gulp-replace" - нужен для замены путей к файлам изображений;
### 19. "gulp-fonter" - преобразует файлы шрифтов "otf" и "eot" в "ttf" формат, а также "ttf" в "woff";
### 20. "gulp-ttf2woff2" - для конвертирования формата "ttf" шрифтов в "woff2";
### 21. "browser-sync" - автоматическое обновление браузера при изменении файлов;
### 22. "gulp-newer" - нужен для отслеживания новых файлов;
### 23. "gulp-rename" - переименовывает файлы, нужно для разделения файлов используемых в разработке проекта и его продакшэне;
### 24. "del" - используется для удаления ненужных файлов и модулей;
### 25. "gulp-version-number" - используется для борьбы с кэшированием файлов в браузере;
### 26. "gulp-plumber" - отлавливает ошибки;
### 27. "gulp-notify" - выводит уведомление об ошибке;
### 28. "gulp-zip" - создаёт ZIP-архив и помещает в него папку с проектом;
### 29. "vinyl-ftp" - нужен для отправки готового проекта на выделенный сервер;
### 30. "gulp-util" - показывает в терминале логи об отправке файлов на выделенный сервер;
---
&nbsp;

# 3. Обзор
&nbsp;

---
### А теперь как это работает. Данная сборка разделена на модули, которые затем импортируются в "gulpfile.js". В папке "gulp" хранятся эти самые модули. В папке "config" лежат общие настройки для "Gulp":

### 1. "ftp.js" - отвечает за настройки сервера, в нем указываются данные о сервере куда будет отправляться ваш готовый проект;
```
export let configFTP = {
    host: "", // FTP server address
    user: "", // Username
    password: "", // Password
    parallel: 5 // Number of simultaneous threads
}
```
### 2. "path.js" - содержит пути к источникам, к папкам с результатом операций, папкам за которыми нужно наблюдать при каких-либо изменениях в них и папке на удалённом сервере;
```
// Getting the name of the project folder
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // You can also use rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        //html: `${srcFolder}/*.pug`,   // To work with PUG uncomment this line
        html: `${srcFolder}/*.html`,    // and comment out this
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        //html: `${srcFolder}/**/*.pug`,   // To work with PUG uncomment this line
        html: `${srcFolder}/**/*.html`,    // and comment out this
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test` // Folder on a remote server
}
```
### 3. "plugins.js" - содержит импорт общих плагинов, используемых во всех модулях сборки;
```
import replace from 'gulp-replace'; // Search and replace
import plumber from 'gulp-plumber'; // Error processing
import notify from 'gulp-notify';   // Messages (notification)
import browserSync from 'browser-sync'; // Local server
import newer from 'gulp-newer'; // Checking for update
import ifPlugin from 'gulp-if'; // Conditional branching

// Exporting the object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}
```
### В папке "tasks" расположены задачи, которые будут запускаться при работе с данной сборкой. 
### Следует отметить, что большинство функций в задачах, будут работать только при вызове команды "npm run gulp_build", которая в свою очередь, выполняет сбор, подготовку и оптимизацию проекта к продакшену. Так как эти функции не нужны для разработки проекта, то с помощью плагина "gulp-if" проверяется наличие у вызванной команды ключа "--build" в "package.json", если он есть, то выполняются все действия по сборке проекта, в ином случае только те, что необходимы при разработке проекта. 

### 1. "copy.js" - просто копирует файлы из папки "files" в папку с результатом, если у вас есть какие-либо файлы которые вы не хотите обрабатывать, вы можете просто поместить их в папку "files" где лежат источники;
```
export const copy = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
}
```
### 2. "fonts.js" - выполняет работу со шрифтами, а именно конвертирует их в формат "woff" и "woff2". Помимо этого, создаёт файл "fonts.scss" в котором автоматически подключает уже конвертированные шрифты и их настройки;
```
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    // Looking for font files .otf и .eot
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.{otf,eot}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        }))
    )
    // Convert to .ttf
    .pipe(fonter({
        formats: ['ttf']
    }))
    // Upload to the source folder
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    // Looking for font files .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        }))
    )
    // Convert to .woff
    .pipe(fonter({
        formats: ['woff']
    }))
    // Upload to the build folder
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    // Looking for font files .ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    // Convert to .woff2
    .pipe(ttf2woff2())
    // Upload to the build folder
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    // Font connection styles file
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    // Checking if font files exist
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // Checking whether there is a style file for connecting fonts
            if (!fs.existsSync(fontsFile)) {
                // If the file does not exist, create it
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    // Writing font connections to a style file
                    let fontFileName = fontsFiles[i].split('.')[0];
                    console.log(fontFileName);
                    if (newFileOnly !== fontFileName) {

                        // Optionally, cuts off the font name to the "-" symbol ("Roboto"), if there is no symbol, then simply writes the full font name ("Roboto-Bold")
                        // let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        // Optionally, cuts off the font name after the "-" symbol ("Bold"), if there is no symbol, then simply writes the full font name ("Roboto-Bold")
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
                        // Easy to understand option
                        /* fs.appendFile(fontsFile,
                            `@font-face {
                                font-family: ${fontName};
                                font-display: swap;
                                src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                                font-weight: ${fontWeight};
                                font-style: normal;
                            }\r\n`, cb); */
                        
                        // Optimized option with tabs for beautiful import into a font file
                        fs.appendFile(fontsFile,`@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } 
            else {
                // If the file exists, display a message
                console.log("The file scss/fonts.scss already exists. To update a file you need to delete it!");
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}
```
### 3. "ftp.js" - создаёт соединение "FTP" с удалённым сервером и отправляет папку с готовым проектом на удалённый сервер, также выводит в терминал логи отправки файлов;
```
import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}**/*.*`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FTP",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}
```
### 4. "html.js" - выполняет обработку файлов "html". Собирает компоненты "html" с помощью "fileiclude()", заменяет пути к изображениям ("replace(/@img\//g, 'img/')"), добавляет обёртку для "webp" изображений ("webpHtmlNosvg()"), при помощи "versionNumber" обновляет файлы для того чтобы они не кэшировались в браузер (помогает при ситуации, когда изменённый файл "html" не отображает изменения в браузере из-за кэширования предыдущей версии файла, для этого создаёт файл "version.json" c ключом, который обновляет файлы в кэше браузера). Также обновляем при изменениях браузер и отслеживаем ошибки;
```
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
```
### 5. "images.js" - выполняет обработку изображений. Проверяет при каждой операции наличие уже оптимизированных вариантов изображений с помощью плагина "gulp-newer", конвертирует изображения в формат "webp", сжимает их и отправляет в папку с результатом. "SVG" изображения не обрабатываются, а просто копируются в папку с результатом. Обновляем браузер при изменениях в файлах и отслеживаем ошибки;
```
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
    .pipe(app.plugins.if(
        app.isBuild,
        webp()
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        app.gulp.dest(app.path.build.images)
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        app.gulp.src((app.path.src.images), { encoding: false })
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        app.plugins.newer(app.path.build.images)
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg)) // If you do not use svg images, then comment out this line
    .pipe(app.gulp.dest(app.path.build.images)) // and this one too, otherwise you will get an error
    .pipe(app.plugins.browserSync.stream());
}
```
### 6. "js.js" - используя "webpack", минимизирует и оптимизирует код для старых версий браузеров,  создаёт и переименовывает файл в "app.min.js" для готового к продакшэну проекта. Обновляем браузер при изменениях в файлах и отслеживаем ошибки;
```
import webpack from 'webpack-stream';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
            filename: "app.min.js",
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}
```
### 7. "reset.js" - удаляет папку с результатом. Выполняется в начале при запуске команд "npm run task_name";
```
import { deleteAsync } from 'del';

export const reset = () => {
    return deleteAsync(app.path.clean);
}
```
### 8. "scss.js" - выполняет работу с "SCSS" и "Sass" файлами. Изменяет пути к изображениям, преобразует файлы препроцессора "Sass" и "SCSS" в обычные "CSS" файлы, группирует медиа-правила для различных устройств, формирует работу с "webp" изображениями, добавляет префиксы для браузеров, минимизирует и оптимизирует код и после всех этих операций, создаёт и переименовывает файл в "min.css" для готового к продакшэну проекта;
```
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
```
### 9. "server.js" - создаёт локальный сервер для отслеживания изменений в файлах и последующего обновления браузера;
```
export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000
    });
}
```
### 10. "svgSprive.js" - работает с "SVG-спрайтами". Собирает все "SVG-спрайты" в один файл "icons.svg";
```
import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: `../icons/icons.svg`,
                // Create a page with a list of icons
                example: true
            }
        }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}
```
### 11. "zip.js" - создаёт "ZIP-архив" и помещает в него папку с готовым проектом;
```
import { deleteAsync }from 'del';
import zipPlugin from 'gulp-zip';

export const zip = () => {
    deleteAsync(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "ZIP",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'));
}
```

### Основным файлом для сборки "Gulp" является "gulpfile.js". Именно в нём выполняется те самые команды по сборке проекта. Сюда импортируется сам "Gulp", пути к папкам из "path.js", общие плагины из "plugins.js", передаются значения в глобальную переменную "app", импортируются задачи из папки "tasks.js", прописывается наблюдатель за папками и файлами ("watcher(){ ... }") и назначаются сценарии и команды для запуска сборки проекта.

## Небольшое пояснение как работать со скриптами.

### Как уже было сказано выше, данная сборка подразумевает работу на модульной структуре введенной в новой редакции "JavaScript ES6". В папке "js", которая лежит в "src", есть файл "app.js". По логике работы со сборкой, именно в него будут импортироваться ваши скрипты в качестве модулей, и только он будет оптимизироваться и подключаться как "app.min.js" к вашему файлу "html".
### Рядом с ним находится папка "modules". В ней вы можете хранить свои модули со скриптами. Данная сборка не собирает все скрипты и модули в один файл, для этого вы должны сами имортировать свои модули в "app.js"!
### Помимо прочего, в папке "modules" уже находится "functions.js" - необходимый файл для работы со сборкой. Он проверяет поддержку webp-изображений в используемом браузере и на основе этого назначает класс: "webp" или "no-webp". Данные классы используются в задаче "scss.js" и выводят, либо webp-изображение (если "webp") или же обычное ("PNG", "JPG") изображение (если "no-webp"). 
---
&nbsp;

# 4. Заключение
&nbsp;

---
### "Gulp" - безусловно является очень полезным инструментом при разработке и созданию готового проекта. Настроив его под свои нужды, можно избежать многих повторяющихся и монотонных действий, отнимающих драгоценное время. Собрав в свою сборку "Gulp" необходимые мне инструменты для работы, я сэкономил себе уйму времени и сил при разработке проектов. Достаточно ввести всего одну команду и все задачи, которые ранее казались ресурсоёмкими, теперь выполняются за одну секунду, обглечая твою работу и делая её значительно проще и быстрее.
---
&nbsp;

# ___Спасибо за уделенное время!___ 
