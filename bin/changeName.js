#! /usr/bin/env node

//传递参数
//旧值
let oldName =  process.argv[2] && process.argv[2].slice(1);

//新值 
let newName= process.argv[3] && process.argv[3].slice(1);

const path = require('path');

const fs = require('fs');

if(fs.existsSync(path.join(process.cwd(),oldName))){
   fs.renameSync(oldName,newName); 
}




