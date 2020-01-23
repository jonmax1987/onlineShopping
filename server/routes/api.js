var express = require('express');
var con = require('../modules/DB').getPool();
var router = express.Router();
var httpRespons = require('../modules/httpResponse');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res) {
    let respons = new httpRespons;
    let description = req.body.description;
    let Method_path = req.body.Method_path;
    let Request = req.body.Request;
    let Response = req.body.Response;
    con.query(`INSERT INTO api(description, Method_path, Request, Response) VALUES(?,?,?,?)`, [description, Method_path, Request,Response], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'api added successfuly';
        respons.data = result;
        res.json(respons);
    })
})

router.get('/',function(req,res){
    let respons = new httpRespons();
    con.query(`SELECT * FROM api`, function (err, result, fields) {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
            return
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'api-list';
        respons.data = result;
        res.json(respons);
    })
})

module.exports = router;