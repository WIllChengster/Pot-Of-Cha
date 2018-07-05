const express = require('express');
const { resolve } = require('path');
const server = express();
const PORT = process.env.PORT || 5000;

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


server.use(express.static(resolve(__dirname, '..', 'dist')));
server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '..', 'dist', 'index.html'));
});

server.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});
