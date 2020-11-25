/* const http = require("http")
const { request } = require("https");
const { type } = require("os"); */

/* const server = http.createServer((request,response)=>{

response.end("Finaliza servidor");

} );
server.listen(3333);
console.log("Servidor con el puerto 3333"); */

const server = http.createServer((request,response)=>{
    
    response.writeHead(200,{"Content-type":"text/html"});
    response.write("<strong>Nodejs para davilabs</strong>");
    response.end();
    
    } );
    server.listen(8080);
    console.log("Servidor con el puerto 8080");