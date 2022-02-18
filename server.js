const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("PACER DADDY")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("READY")});
}
module.exports = keepAlive




