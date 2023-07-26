console.log('HELLO WORLD')
const http=require('http')
const server=http.createServer(function(req,res){
res._write('<h1>hello node !!! <h1/>')
res.end()
})
server.listen(3000,(err)=>{
    err?console.log(err):console.log('server is running on http://localhost:3000');
})
const fs=require('fs')
fs.writeFile("welcome.txt","hello node" ,(err)=>{
    err?console.log(err):console.log('file seccesfully created')
})
fs.readFile("welcome.txt",(err,data) => {
    if (err) throw err ; 
    console.log(data.toString())
} )
//task4
const password = require ('./password-generator')
// task 5
const transporter = require ('./email-sender')
