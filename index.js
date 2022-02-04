const http = require('http');
const PORT = 8000;

const fs = require('fs');

const TimeStamp = Date.now();
let currentDate = new Date(TimeStamp);
fs.writeFileSync("date-time.txt",`Current TimeStamp : ${TimeStamp}

Current Date & Time : ${currentDate}`); 

http.createServer((req,res)=>{
res.writeHeader(200,{"content-type":'text/html'})
fs.readFile('./date-time.txt',(err,data)=>{
    res.write(data);
    res.end();
})
}).listen(PORT,()=>{
    console.log('listening to ' + PORT);
})
