#!/usr/bin/env node
const exec = require('child_process').exec;
var funcs = {}

const shell = (exec_list)=>{
  exec_list.forEach((exec_str)=>{
    exec(exec_str, (error, stdout, stderr) => {
      console.log(stdout)
    })
  })
}

funcs.init = ()=>{
  shell([
    'mkdir ~/Dropbox/Git',
  ])
}

funcs.create = ()=>{
  var repo_name = process.argv[3] || process.cwd().split('/').pop()
  shell([
    `git init --bare ${process.env.HOME}/Dropbox/Git/${repo_name}.git`,
    `git remote add drit ${process.env.HOME}/Dropbox/Git/${repo_name}.git`
  ])
}

funcs.ls = ()=>{
  shell([
    `ls ${process.env.HOME}/Dropbox/Git/ | sed -e "s/\.[^.]*$//"`
  ])
}

funcs.clone = ()=>{
  var targetRepo = process.argv[4] || process.argv[3]
  shell([
    `git clone ${process.env.HOME}/Dropbox/Git/${process.argv[3]}.git ${targetRepo}`
  ])
}

funcs[process.argv[2]]()
