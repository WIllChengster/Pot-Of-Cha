const express = require('express');
const { resolve } = require('path');
const server = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
const circularJSON = require("circular-json");
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



server.use(express.static(resolve(__dirname, 'client', 'dist')));


server.get("/api/yelp/sharetea", (req, res) => {
    axios.get("https://api.yelp.com/v3/businesses/BcekniF1I3xAkONVShohnQ", {
        "headers": {
            "Authorization" : "Bearer P1QNCZWcHanFAlNV2ntXQAdYd-VRm8_Rd_iMhjYD_uVeS1lPqsQXLCZ_X8aMyX1xJRjKhpKbWkM11uuEsYGUbj4PdxnkMBjUAGoUu4gGVyKvKMNlk54QTOQS0Ko9W3Yx"
        }
    }).then(response => {
        console.log(response);
        res.send(circularJSON.stringify(response));
    }).catch( err => {
        console.log(err);
    })
});

server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

server.listen(PORT, ()=>{ console.log('server is listening to '+PORT)});
