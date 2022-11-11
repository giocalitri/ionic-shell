#!/usr/bin/env node
const { exec } = require("child_process");

let path = require('path');
let dirname = path.dirname(__filename);
let ionic_path = dirname + '/../node_modules/.bin/ionic.js'

let new_ionic_command = ionic_path + ' ' + process.argv.slice(2, process.argv.length).join(' ')

console.warn('WARNING: this is not the actual `ionic.js` cli, just a wrapper around `@ionic.js/cli`. Consider install that instead')

exec(new_ionic_command, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
});
