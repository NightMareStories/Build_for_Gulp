# Attention!!! This "Gulp" build in this branch uses the "new" modular approach according to "ES6". If you use the "old" functional approach in your projects, then go to the "old_gulp" branch!
&nbsp;
# This documentation is relevant only for the "new_gulp" branch!!!
&nbsp;

# Hello!
&nbsp;

---
## This is my build for the Gulp project builder, which I constantly work with, using it for my projects.
&nbsp;

### **1. `First you need to install `"[NodeJS](https://nodejs.org/)"` on your computer. To check its presence on your PC, enter the command in the terminal:`**

```
node --version 
```

```
npm --version
```

### `If the commands work and display versions, then "Node" and "NPM" are already installed;`
### **2. `Before installing packages, you must first install "Gulp" globally on your system:`**

```
npm i --global gulp-cli
```

### `And then from the folder with "gulpfile.js" install all the plugins from "package.json" using the command in your terminal:`

```
npm i -D
```

### This build contains several important tasks that can be launched by calling them in the terminal:

```
npm run task_name
```

### These are the tasks:

### 1. `gulp_dev` - development mode, runs only the necessary tasks to work on the project;
### 2. `gulp_build` - completely builds and optimizes the project for sending to the server;
### 3. `gulp_zip` - creates an archive with the finished project;
### 4. `gulp_deploy` - sends the finished project to a remote server;
### 5. `gulp_svgSprive` - separately collects all "SVG" sprites into one file;

### The build contains template files (folder "src"), which are needed only to demonstrate the operation of this build. Just delete and replace them with your files that you will work with, BUT do not touch the "js" folder, since it contains the files necessary for the assembly to work: "app.js" - the main plug-in script and "modules/functions.js" - module for the correct operation of the "scss.js" task (webp image output), imported into "app.js".
### If you just need to process some files, for example images or fonts, then simply move your files to the appropriate folders: fonts in the "fonts" folder, and images in the "img" folder (to combine "SVG sprites", place your files in the "svgicons" folder).

### Then just run the command:

```
npm run gulp_build
```

### It will process your files and place them in the "dist" folder, where you can take them and use them in your project.
---
&nbsp;

# 1. Introduction
&nbsp;

---
### "Gulp" is a multifunctional program for automatically performing frequently used tasks; in other words, it is a project builder, but its functionality can be broader than this definition, and it can be used to perform various operations. "Gulp" is very popular among developers, and thanks to its simple and straightforward configuration, even newcomers to the "IT" industry can work with it. "Gulp" has detailed documentation for the various modules and functions for working with it.

### I put together my "Gulp" build from various modules and functions aimed at front-end development. It contains: minimizing and optimizing "js" files, converting the work of the "Sass" and "SCSS" preprocessor to the usual "CSS" format, compressing and converting images, working with fonts, modular division of "HTML" files into components, and also, adding "CSS" prefixes, working with "SVG" images, working with "webp" images and other useful functions.
---
&nbsp;

# 2. Familiarization
&nbsp;

---
### First, let’s learn more about the modules used:

### 1. "gulp" - obviously necessary for everything to work;
### 2. "gulp-if" - used to determine the mode of operation with the build, and based on this, launches the necessary tasks for processing files;
### 3. "gulp-pug" - needed to work with "PUG" preprocessor files;
### 4. "gulp-file-include" - needed to separate "html" files into components;
### 5. "sass" - a preprocessor for working with "SCSS" and "Sass" files;
### 6. "gulp-sass" - for converting "SCSS" and "Sass" files into the standard "CSS" format;
### 7. "gulp-autoprefixer" - to add prefixes to "CSS" files, necessary for compatibility with older browsers;
### 8. "gulp-group-css-media-queries" - groups all media rules (rules for screen resolution on the device) in one place for convenience;
### 9. "gulp-clean-css" - minimizes "CSS" files by removing all spaces, the files weigh less after processing;
### 10. "webpack" - minimizes "js" files to save disk space and quickly load scripts, and also optimizes them for previous code revisions for older browsers;
### 11. "webpack-stream" - allows you to use "webpack" inside "Gulp";
### 12. "gulp-imagemin" - compresses images making them "lighter" without losing quality;
### 13. "gulp-webp" - needed to work with "webp" images;
### 14. "gulp-webp-html-nosvg" - adds a template with a "webp" image to the "html" files, does not touch the "SVG" images;
### 15. "gulp-webp-css" - necessary for working with "webp" images in "CSS";
### 16. "webp-converter" - converting images with various formats into the "webp" format;
### 17. "gulp-svg-sprite" - for working with "SVG" images;
### 18. "gulp-replace" - needed to replace paths to image files;
### 19. "gulp-fonter" - converts font files "otf" and "eot" to "ttf" format, as well as "ttf" to "woff";
### 20. "gulp-ttf2woff2" - to convert the "ttf" font format to "woff2";
### 21. "browser-sync" - automatic browser update when files change;
### 22. "gulp-newer" - needed to track new files;
### 23. "gulp-rename" - renames files, needed to separate files used in project development and production;
### 24. "del" - used to remove unnecessary files and modules;
### 25. "gulp-version-number" - used to combat file caching in the browser;
### 26. "gulp-plumber" - catches errors;
### 27. "gulp-notify" - displays an error notification;
### 28. "gulp-zip" - creates a ZIP archive and places the project folder in it;
### 29. "vinyl-ftp" - needed to send the finished project to a dedicated server;
### 30. "gulp-util" - shows in the terminal logs about sending files to a dedicated server;
---
&nbsp;

# 3. Overview
&nbsp;

---
### Now how does it work? This build is divided into modules, which are then imported into "gulpfile.js". These modules are stored in the "gulp" folder. The "config" folder contains general settings for "Gulp":

### 1. "ftp.js" - is responsible for the server settings, it specifies information about the server where your finished project will be sent;
```
export let configFTP = {
    host: "", // FTP server address
    user: "", // Username
    password: "", // Password
    parallel: 5 // Number of simultaneous threads
}
```
### 2. "path.js" - contains paths to sources, folders with the results of operations, folders that need to be monitored for any changes in them, and a folder on the remote server;
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
### 3. "plugins.js" - contains the import of common plugins used in all build modules;
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
### The "tasks" folder contains tasks that will be launched when working with this build.
### It should be noted that most of the functions in the tasks will only work when calling the "npm run gulp_build" command, which in turn collects, prepares and optimizes the project for production. Since these functions are not needed for project development, using the "gulp-if" plugin, the called command is checked for the presence of the "--build" key in "package.json", if it exists, then all steps to build the project are performed, in otherwise, only those that are necessary when developing the project.

### 1. "copy.js" - simply copies files from the "files" folder to the result folder, if you have any files that you do not want to process, you can simply put them in the "files" folder where they are sources;
```
export const copy = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
}
```
### 2. "fonts.js" - performs work with fonts, namely converts them into the "woff" and "woff2" format. In addition, it creates a file "fonts.scss" in which it automatically includes already converted fonts and their settings;
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
### 3. "ftp.js" - creates an "FTP" connection with a remote server and sends the folder with the finished project to the remote server, also displays file sending logs to the terminal;
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
### 4. "html.js" - processes "html" files. Collects "html" components using "fileiclude()", replaces image paths ("replace(/@img\//g, 'img/')"), adds a wrapper for "webp" images ("webpHtmlNosvg()" ), using "versionNumber" updates files so that they are not cached in the browser (helps in a situation where a modified "html" file does not display changes in the browser due to caching of the previous version of the file, for this it creates a file "version.json" with a key that updates files in the browser cache). We also update the browser when changes occur and track errors;
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
### 5. "images.js" - performs image processing. With each operation, it checks for the presence of already optimized image options using the "gulp-newer" plugin, converts the images to the "webp" format, compresses them and sends them to the result folder. "SVG" images are not processed, but simply copied to the result folder. We update the browser when there are changes in files and track errors;
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
### 6. "js.js" - using "webpack", minimizes and optimizes the code for older versions of browsers, creates and renames the file to "app.min.js" for a production-ready project. We update the browser when there are changes in files and track errors;
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
### 7. "reset.js" - deletes the folder with the result. Executed at the beginning when running the commands "npm run task_name";
```
import { deleteAsync } from 'del';

export const reset = () => {
    return deleteAsync(app.path.clean);
}
```
### 8. "scss.js" - works with "SCSS" and "Sass" files. Changes paths to images, converts "Sass" and "SCSS" preprocessor files into regular "CSS" files, groups media rules for different devices, creates work with "webp" images, adds prefixes for browsers, minimizes and optimizes code and after all of these operations, creates and renames a file to "min.css" for a project ready for production;
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
### 9. "server.js" - creates a local server to track changes in files and subsequently update the browser;
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
### 10. "svgSprive.js" - works with "SVG sprites". Collects all "SVG sprites" into one file "icons.svg";
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
### 11. "zip.js" - creates a "ZIP archive" and places a folder with the finished project in it;
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

### The main file for building "Gulp" is "gulpfile.js". It is in it that the very commands for build the project are executed. "Gulp" itself is imported here, folder paths from "path.js", general plugins from "plugins.js", values ​​are transferred to the global variable "app", tasks are imported from the "tasks.js" folder, a folder and files watcher is registered ("watcher(){ ... }"), and also assign scripts and commands to start building the project.

## A short explanation of how to work with scripts.

### As mentioned above, this build involves working on the modular structure introduced in the new edition of "JavaScript ES6". In the "js" folder, which is located in "src", there is a file "app.js". According to the logic of working with the build, it is into it that your scripts will be imported as modules, and only it will be optimized and connected as "app.min.js" to your "html" file.
### Next to it is the "modules" folder. You can store your modules with scripts in it. This build does not collect all scripts and modules into one file; for this you must import your modules into "app.js" yourself!
### Among other things, the "modules" folder already contains "functions.js" - the necessary file for working with the build. It checks the support of webp images in the browser being used and based on this assigns a class: "webp" or "no-webp". These classes are used in the "scss.js" task and output either a webp image (if "webp") or a regular ("PNG", "JPG") image (if "no-webp").
---
&nbsp;

# 4. Conclusion
&nbsp;

---
### "Gulp" is certainly a very useful tool when developing and creating a finished project. By customizing it to your needs, you can avoid many repetitive and monotonous actions that take away valuable time. By collecting the tools I needed for work into my "Gulp" build, I saved myself a lot of time and effort when developing projects. It is enough to enter just one command and all tasks that previously seemed resource-intensive are now completed in one second, making your work easier and faster.
---
&nbsp;
 
# ___Thank you for your time!___
