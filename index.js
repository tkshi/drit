#!/usr/bin/env node

const exec = require('child_process').exec;

exec('bash bin/' + process.argv[2],  (error, stdout, stderr) => {
console.log(stdout)
})
