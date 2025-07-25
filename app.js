const http  = require('http')
const {readFileSync,writeFileSync } = require('fs')

const read = readFileSync('./simple/index.html','utf-8')

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.write(read)
        response.end()
    }
    else if(request.url === '/about'){
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write("Welcome to about page!!")
        response.write(`<p><a href="/">Go to Home Page</a></p>`)
       
        response.end()
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(`<h1>no such page</h1>`)
       
        response.end()
    }
   
    
})
server.listen(5000,()=>{
    console.log("server is at port 5000")
})