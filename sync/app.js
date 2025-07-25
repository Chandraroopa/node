//const fs = require('fs')
//const read = fs.readFileSync
//const write = fs.writeFileSync

const {readFileSync,writeFileSync } = require('fs')

const read = readFileSync('./simple/index.html','utf-8')
console.log(read)
writeFileSync('./simple/first.txt','hi',{flag:'a'})
writeFileSync('./simple/second.txt','second file',{flag:'a'})