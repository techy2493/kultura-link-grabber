const { series, parallel } = require("gulp");
const rm = require("rimraf");
const { src, dest } = require("vinyl-fs");
const path = require("path");
const zip = require("gulp-zip");
const minify = require("gulp-minify");
const concat = require("gulp-concat");

const OUTPUT_PATH = "./dist";
const FF_SRC_PATH = "./src_ff";
const CHROME_SRC_PATH = "./src_chrome"
const SHARED_SRC_PATH = "./src_shared"

function clean(cb) {
    rm(OUTPUT_PATH, () => {
        cb();
    });
}

function build_firefox() {
    return src(addFileExpression(FF_SRC_PATH))
    .pipe(src(addFileExpression(SHARED_SRC_PATH)))
    .pipe(concat("background.js"))
    .pipe(minify(
        {  
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            noSource: true
        }))
    .pipe(src(FF_SRC_PATH + "/manifest.json"))
    .pipe(dest(path.join(OUTPUT_PATH, "firefox")));
}

function build_chrome() {
    return src(addFileExpression(CHROME_SRC_PATH))
    .pipe(src(addFileExpression(SHARED_SRC_PATH)))
    .pipe(concat("background.js"))
    .pipe(minify(
        {  
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            noSource: true
        }))
    .pipe(src(CHROME_SRC_PATH + "/manifest.json"))
    .pipe(dest(path.join(OUTPUT_PATH, "chrome")));
}

function addFileExpression(path) {
    let fileTypes = ['/*.js']
    return fileTypes.map(type => path + type);
}

function archive_firefox() {
    return src(addFileExpression(path.join(OUTPUT_PATH, "firefox")))
    .pipe(zip("firefox.zip"))
    .pipe(dest(OUTPUT_PATH));
}

function archive_chrome() {
    return src(addFileExpression(path.join(OUTPUT_PATH, "chrome")))
        .pipe(zip("chrome.zip"))
        .pipe(dest(OUTPUT_PATH));
}

exports.build = series(clean, parallel(build_firefox, build_chrome), parallel(archive_firefox, archive_chrome));