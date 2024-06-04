# Внимание!!! Я работаю над новой версией сборки для Gulp, она будет полностью переделана на модульный подход согласно ES6. Данная документация не актуальна для новой версии и будет обновлена в ближайшее время!!!
&nbsp;

# Привет!
&nbsp;

---
## Это моя сборка для сборщика проектов Gulp с которой я постоянно работаю, используя её для своих проектов. Cначала вам нужно установить все плагины из package.json с помощью команды в вашем терминале.

```
npm i
```

## Для запуска всех возможных функций данной сборки введите команду в терминале:

```
gulp
```

## Вы можете запустить любую из доступных функций этой сборки отдельно, если вам нужно запустить определённую функцию введите в терминале её название.

## Список всех функций:

### 1. fontsStyle;
### 2. fonts;
### 3. images;
### 4. js;
### 5. css;
### 6. html;
### 7. build;
### 8. watch;
### 9. default;
---
&nbsp;

# 1. Введение
&nbsp;

---
### "Gulp" - многофункциональнальная программа для автоматического выполнения часто используемых задач, проще говоря, это сборщик проектов, но его функционал может быть шире этого определения, а  использоваться он может для выполнения различных задач. "Gulp" пользуется большой популярностью среди разработчиков, и благодаря простой и понятной конфигурации, им пользуются даже новички в "IT" отрасли. У "Gulp" есть подробная документация к различным модулям и функциям для работы с ним. 

### Я собрал свою сборку "Gulp" из различных модулей и функций нацеленную на фронт-энд разработку. В ней присутвуют: минимизация и оптимизация файлов "js", преобразование работы препроцессора "Sass" и "SCSS" к обычному "CSS" формату, сжатие и конвертация изображений, работа со шрифтами, модульное разделение "HTML" файлов на компоненты, а также, добавление префиксов "CSS", работа с "SVG" изображениями, преобразование файлов "js" к старым версиям для совместимости, собрание всех файлов скриптов в один и другие полезные функции.  
---
&nbsp;


# 2. Ознакомление
&nbsp;

---
### А теперь подробнее про используемые модули:

### 1. "gulp" - очевидно необходим, чтобы всё работало;
### 2. "gulp-file-include" - нужен для разделения на компоненты "html" файлов;
### 3. "gulp-sass" - для преобразования "SCSS" и "Sass" файлов в стандартный "CSS" формат;
### 4. "gulp-less" - для преобразования файлов "Less" в стандартный "CSS" формат;
### 5. "gulp-autoprefixer" - для добавления префиксов в "CSS" файлы, нужно для совместимости со старыми браузерами;
### 6. "gulp-group-css-media-queries" - группирует все медиа-правила (правила для разрешения экрана на устройстве) в одном месте для удобства;
### 7. "gulp-clean-css" - минимизирует "CSS" файлы удаляя все пробелы, файлы меньше весят после обработки;
### 8. "gulp-uglify-es" - минимизурует файлы "js" для экономии пространства на диске и быстрой загрузки скриптов;
### 9. "gulp-babel" - для оптимизации файлов "js" под старые редакции кода, нужен для старых браузеров;
### 10. "@babel/core" - ядро для работы "babel";
### 11. "@babel/preset-env" - необходимый пресет для работы "babel";
### 12. "gulp-imagemin" - сжимает изображения делая их "легче" не теряя при этом качества;
### 13. "gulp-webp" - нужен для работы с "webp" изображениями;
### 14. "gulp-webp-html" - добавляет в "html" файлы шаблон с "webp" изображением;
### 15. "gulp-webp-css" - необходимо для работы с "webp" изображениями в "CSS";
### 16. "gulp-webpcss" - ещё один полезный модуль для работы с "webp" изображениями в "CSS",
### 17. "webp-converter" - конвертация изображений с различными форматами в формат "webp";
### 18. "gulp-svg-sprite" - для работы с "SVG" изображениями;
### 19. "gulp-ttf2woff" - для конвертирования формата "ttf" шрифтов в "woff";
### 20. "gulp-ttf2woff2" - для конвертирования формата "ttf" шрифтов в "woff2";
### 21. "gulp-fonter" - преобразует файлы "otf" шрифтов  в "ttf" формат;
### 22. "browser-sync" - автоматическое обновление браузера при изменении файлов;
### 23. "gulp-newer" - нужен для отслеживания новых файлов;
### 24. "gulp-concat" - нужен для объединения нескольких файлов в один;
### 25. "gulp-rename" - переименовывает файлы, нужно для разделения файлов используемых в разработке проекта и его продакшэне;
### 26. "del" - используется для удаления ненужных файлов и модулей;
### 27. "gulp-sourcemaps" - создаёт "карты" стилей для корректного отображения "CSS" правил в инструментах разработчика браузера; 
---
&nbsp;

# 3. Обзор
&nbsp;

---
### Как было сказано выше, вы можете вызывать любую задачу обособленно от остальных или же использовать весь доступный функционал простой командой:

```
gulp
```

### Думаю пора разобрать все задачи и функции по порядку:

### 1. "browserSync" - запускает локальный сервер из папки с готовыми после обработки файлами, мы будем вызывать эту функцию после каждого обновления наших файлов;
### 2. "html" - данная функция вставляет отдельные компоненты с "html" кодом, это позволяет разделить по файлам различные компоненты страницы, например, "Header" и "Footer" у нас будут отдельно от остальной страницы, но при компиляции всё это будет вставляться в один основной файл "html". Также эта функция работает с "webp" изображениями для корректного вывода их на страницу;
### 3. "css" - данная функция преобразует файлы препроцессора "Sass" и "SCSS" в обычные "CSS" файлы, добавляет префиксы для браузеров, формирует работу с "webp" изображениями, группирует медиа-правила для различных устройств, минимизирует и оптимизирует код и после всех этих операций, создаёт и переименовывает готовый файл в "min.css" для готового к продакшэну проекта;
### 4. "js" - собирает все доступные скрипты в один общий файл, минимизирует и оптимизирует код для старых версий браузеров,  создаёт и переименовывает готовый файл в "min.js" для готового к продакшэну проекта;
### 5. "images" - сжимает изображения и конвертирует их в современный формат "webp";
### 6. "fonts" - преобразует расширения шрифтов в формат "woff" и "woff2";
### 7. "gulp.task('otf2ttf', function (){...})" - дополнительная функция по работе со шрифтами, преобразует "otf" формат в "ttf";
### 8. "gulp.task('svgSprite', function () {...})" - дополнительная функция по работе со "SVG" изображениями, изменяет прозрачность спрайтов;
### 9. "fontsStyle" - данная функция записывает в специальный файл стилей ("fonts.scss") настройки шрифтов, при добавлении нового шрифта она автоматически подключит и настроит его в "fonts.scss";
### 10. "watchFiles" - функция отслеживает в реальном времени изменения в текущем проекте, если файлы были изменены, то она автоматически их скомпилирует и соберет в готовый проект;
### 11. "clean" - удаляет файлы из уже собранного проекта, используется при создании билда проекта для продакшена, а также удаляет старые версии файлов, если они были изменены;
### 12. "build" - команда очищает проект, параллельно запускает функции "js", "css", "html", "images", "fonts" и отдельно запускает "fontsStyle", это нужно для корректного подключения шрифтов и их настроек;
### 13. "watch" - команда собирает проект ("build"), следит за изменениями ("watchFiles"), и автоматически обновляет браузер ("browserSync");
---
&nbsp;

# 4. Заключение
&nbsp;

---
### "Gulp" - безусловно является очень полезным инструментом при разработке и созданию готового проекта. Настроив его под свои нужды, можно избежать многих повторяющихся и монотонных действий, отнимающих драгоценное время. Собрав в свою сборку "Gulp" необходимые мне инструменты для работы, я сэкономил себе уйму времени и сил при разработке проектов. Достаточно ввести всего одну команду и все задачи, которые ранее казались ресурсоёмкими, теперь выполняются за одну секунду, обглечая твою работу и делая её значительно проще и быстрее.
---
&nbsp;

# ___Спасибо за уделенное время!___ 