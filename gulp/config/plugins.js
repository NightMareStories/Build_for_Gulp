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

