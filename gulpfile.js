const { series, parallel } = require("gulp");
const rm = require("rimraf");
const { src, dest } = require("vinyl-fs");
const path = require("path");

const OUTPUT_PATH = "./dist";
const FF_SRC_PATH = "./src_ff";
const CHROME_SRC_PATH = "./src_chrome"
const SHARED_SRC_PATH = "./src_shared"

function clean(cb) {
    rm(OUTPUT_PATH, () => {
        cb();
    });
}

function build_firefox(cb) {
    return src(addFileExpression(FF_SRC_PATH))
    .pipe(src(addFileExpression(SHARED_SRC_PATH)))
    .pipe(dest(path.join(OUTPUT_PATH, "firefox")));
}

function build_chrome(cb) {
    return src(addFileExpression(CHROME_SRC_PATH))
    .pipe(src(addFileExpression(SHARED_SRC_PATH)))
    .pipe(dest(path.join(OUTPUT_PATH, "chrome")));
}

function addFileExpression(path) {
    let fileTypes = ['/*.js', '/*.json']
    console.log(fileTypes.map(type => path + type));
    return fileTypes.map(type => path + type);
}

exports.build = series(clean, parallel(build_firefox, build_chrome));