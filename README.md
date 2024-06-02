# Hello!
&nbsp;

---
## This is my build for the Gulp project builder that I constantly work with, using it for my projects. First you need to install all the plugins from package.json using a command in your terminal.

```
npm i
```

### To run all possible functions of this build, enter the command in the terminal.

```
gulp
```

## You can run any of the available functions of this build separately, if you need to run a specific function, enter its name in the terminal.

## List of all functions:

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
 
# 1. Introduction
&nbsp;

---
### "Gulp" is a multifunctional program for automatically performing frequently used tasks, in other words, it is a project builder, but its functionality can be broader than this definition, and it can be used to perform various tasks. "Gulp" is very popular among developers, and thanks to its simple and intuitive configuration, even newcomers to the "IT" industry use it. "Gulp" has detailed documentation for the various modules and functions for working with it.

### I put together my "Gulp" build from various modules and functions aimed at front-end development. It contains: minimizing and optimizing "js" files, converting the work of the "Sass" and "SCSS" preprocessor to the usual "CSS" format, compressing and converting images, working with fonts, modular division of "HTML" files into components, and also, adding "CSS" prefixes, working with "SVG" images, converting "js" files to older versions for compatibility, collecting all script files into one and other useful functions

---
&nbsp;

# 2. Familiarization
&nbsp;

---
### And now more about the modules used:

### 1. "gulp" - obviously necessary for everything to work;
### 2. "gulp-file-include" - needed to separate "html" files into components;
### 3. "gulp-sass" - for converting "SCSS" and "Sass" files into the standard "CSS" format;
### 4. "gulp-less" - to convert "Less" files into the standard "CSS" format;
### 5. "gulp-autoprefixer" - to add prefixes to "CSS" files, necessary for compatibility with older browsers;
### 6. "gulp-group-css-media-queries" - groups all media rules (rules for screen resolution on the device) in one place for convenience;
### 7. "gulp-clean-css" - minimizes "CSS" files by removing all spaces, the files weigh less after processing;
### 8. "gulp-uglify-es" - minimizes "js" files to save disk space and quickly load scripts;
### 9. "gulp-babel" - to optimize "js" files for older code editions, needed for older browsers;
### 10. "@babel/core" - the core for running "babel";
### 11. "@babel/preset-env" - a necessary preset for "babel" to work;
### 12. "gulp-imagemin" - compresses images making them "lighter" without losing quality;
### 13. "gulp-webp" - needed to work with "webp" images;
### 14. "gulp-webp-html" - adds a template with a "webp" image to the "html" files;
### 15. "gulp-webp-css" - necessary for working with "webp" images in "CSS";
### 16. "gulp-webpcss" - another useful module for working with "webp" images in "CSS",
### 17. "webp-converter" - converting images with various formats into the "webp" format;
### 18. "gulp-svg-sprite" - for working with "SVG" images;
### 19. "gulp-ttf2woff" - to convert the "ttf" font format to "woff";
### 20. "gulp-ttf2woff2" - to convert the "ttf" font format to "woff2";
### 21. "gulp-fonter" - converts "otf" font files into "ttf" format;
### 22. "browser-sync" - automatic browser update when files change;
### 23. "gulp-newer" - needed to track new files;
### 24. "gulp-concat" - needed to combine several files into one;
### 25. "gulp-rename" - renames files, needed to separate files used in project development and production;
### 26. "del" - used to remove unnecessary files and modules;
### 27. "gulp-sourcemaps" - creates style "maps" for correct display of "CSS" rules in browser developer tools; 
---
&nbsp;

# 3. Overview
&nbsp;

---
### As mentioned above, you can call any task separately from the rest or use all available functionality with a simple command:

```
gulp
```

### I think it’s time to look at all the tasks and functions in order:

### 1. "browserSync" - launches a local server from the folder with files ready after processing, we will call this function after each update of our files;
### 2. "html" - this function inserts separate components with "html" code, this allows you to separate the various components of the page into files, for example, we will have "Header" and "Footer" separately from the rest of the page, but when compiling everything this will be pasted into one main "html" file. This function also works with "webp" images to display them correctly on the page;
### 3. "css" - this function converts "Sass" and "SCSS" preprocessor files into regular "CSS" files, adds prefixes for browsers, creates work with "webp" images, groups media rules for different devices, minimizes and optimizes the code and after all these operations, creates and renames the finished file to “min.css” for a project ready for production;
### 4. "js" - collects all available scripts into one common file, minimizes and optimizes the code for older versions of browsers, creates and renames the finished file to "min.js" for a project ready for production;
### 5. "images" - compresses images and converts them to the modern "webp" format;
### 6. "fonts" - converts font extensions to "woff" and "woff2" format;
### 7. "gulp.task('otf2ttf', function (){...})" - an additional function for working with fonts, converts the "otf" format to "ttf";
### 8. "gulp.task('svgSprite', function () {...})" - an additional function for working with "SVG" images, changes the transparency of sprites;
### 9. "fontsStyle" - this function writes font settings to a special style file ("fonts.scss"), when adding a new font it will automatically connect and configure it in "fonts.scss";
### 10. "watchFiles" - the function monitors changes in the current project in real time, if the files have been changed, it will automatically compile them and build them into a finished project;
### 11. "clean" - deletes files from an already builded project, is used when creating a project build for production, and also deletes old versions of files if they have been changed;
### 12. "build" - the command cleans the project, runs the functions "js", "css", "html", "images", "fonts" in parallel and runs "fontsStyle" separately, this is necessary for the correct connection of fonts and their settings;
### 13. "watch" - the command build the project ("build"), monitors changes ("watchFiles"), and automatically updates the browser ("browserSync");
---
&nbsp;

# 4. Conclusion
&nbsp;

---
### "Gulp" is certainly a very useful tool when developing and creating a finished project. By customizing it to your needs, you can avoid many repetitive and monotonous actions that take away valuable time. By collecting the tools I needed for work into my "Gulp" build, I saved myself a lot of time and effort when developing projects. It is enough to enter just one command and all tasks that previously seemed resource-intensive are now completed in one second, making your work easier and faster.
---
&nbsp;
 
# ___Thank you for your time!___
