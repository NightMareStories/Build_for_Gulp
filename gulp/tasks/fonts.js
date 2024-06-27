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