const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "charset=utf8")

    if(req.url == "/listaspets"){
        let resultado = petshop.listarPet();
        return res.end(resultado);
    }

    res.end("Você está dentro do sistema petshop!!!");

});

server.listen(3030, 'localhost');