var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const objPersona=[
    {
        id:1,
        nombre:'peppa',
        apellido:'pig',
        edad:4
    },
    {
        id:2,
        nombre:'george',
        apellido:'pig',
        edad:2
    },
];

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.send(JSON.stringify(objPersona));
  });
  
  module.exports = router;
  