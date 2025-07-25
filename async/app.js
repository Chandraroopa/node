//async
const{readFile, writeFile}=require('fs')
//callback funn is a funn passed inside another funn as a arguement
console.log("1")
readFile('./simple/first.txt','utf-8',(Error,res)=>{
    if(Error){
        return
    }
    console.log("2")
})
writeFile('./simple/first.txt','hello',{flag:'a'},(Error)=>{
    if(Error)
       return
    console.log("3")
})
console.log("4")
/*const {readFileSync,writeFileSync } = require('fs')

console.log("1")
const read = readFileSync('./simple/first.txt','utf-8')
console.log("2")
writeFileSync('./simple/first.txt','hi',{flag:'a'})
console.log("3")
writeFileSync('./simple/second.txt','second file',{flag:'a'})
console.log("4")*/