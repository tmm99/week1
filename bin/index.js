#! /usr/bin/env node

const fs = require('fs');

const path = require('path');

let param = process.argv[2].slice(1);

const url = path.join(process.cwd(),param);  //目标文件夹

//判断路径是否存在

if(fs.existsSync(url)){
    //判断是否是文件还是文件夹
    if(fs.statSync(url).isDirectory()){
        let dirList = fs.readdirSync(url); //['css','index.js','index.html']
        let targetList = dirList.map(item => {
            let extname = path.extname(item);
            let size = fs.statSync(path.join(param,item)).size;
            return `${item}-${extname && extname.slice(1)}-${size ? size : ''}`
        })
        console.log(targetList)
    }else{
        console.log(param)
    }
}else{
    console.log("此目录不存在")
}

