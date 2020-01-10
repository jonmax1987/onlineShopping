var express = require('express');
var router = express.Router();
var con = require('../modules/DB').getPool();
var httpRespons = require('../modules/httpResponse');

const jwt = require('jsonwebtoken');

const jwtKey = 'my_secret'
const jwtExpirySeconds = 300

var token = {};


///////////////register/////////////////////
router.post('/', (req, res, next) => {
  let respons = new httpRespons();
  let password = req.body.password;
  let id = req.body.id;
  let username = req.body.email;
  let city = req.body.city;
  let street = req.body.street;
  let name = req.body.name;
  let last_name = req.body.last_name;
  console.log(req.body);
  con.query('SELECT * FROM users WHERE username=?', [username], function (err, result, fields) {
    if (err) {
      respons.success = false;
      respons.errore = true;
      respons.message = 'errore:' + err;
      respons.data = null;
      res.json(respons);
    }
    if (result.length > 0) {
      respons.success = false;
      respons.errore = true;
      respons.message = 'username already exist!!!';
      respons.data = null;
      res.json(respons);
      return;
    };
    con.query('INSERT INTO users(first_name, last_name, username, _id, password, city, street, role) VALUES (?,?,?,?,?,?,?,1)', [name, last_name, username, id, password, city, street], function (err, user, fields) {
      if (err) {
        respons.success = false;
        respons.errore = true;
        respons.message = 'errore:' + err;
        respons.data = null;
        res.json(respons);
      }
      token = jwt.sign({ username: username, password: password, iat: Math.floor(Date.now() / 1000) - 30 }, 'mySecret');
      con.query('SELECT * FROM users WHERE username=?', [username], function (err, new_user, fields) {
        if (err) {
          respons.success = false;
          respons.errore = true;
          respons.message = 'errore:' + err;
          respons.data = null;
          res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'welcome new user!!!';
        respons.data = {
          token: token,
          user: new_user
        };
        res.json(respons);
      })
    })
  });
});

///////////////login/////////////////////

//////////////////change to GET//////////////////////
router.put('/', (req, res, next) => {
  let respons = new httpRespons();
  let username = req.body.username;
  let password = req.body.password;
  con.query('SELECT * FROM users WHERE username=? AND password=?', [username, password], function (err, result, fields) {
    if (err) {
      respons.success = false;
      respons.errore = true;
      respons.message = 'errore:' + err;
      respons.data = null;
      res.json(respons);
    }
    let arry = result.length;
    if (arry > 0) {
      token = jwt.sign({ username: username, password: password, iat: Math.floor(Date.now() / 1000) - 30 }, 'mySecret');
      respons.success = true;
      respons.errore = false;
      respons.message = 'you logedin!!!';
      respons.data = {
        token: token,
        id_user: result
        
      };
      res.json(respons);
    } else {
      respons.success = false;
      respons.errore = true;
      respons.message = 'somthings missing!!!';
      respons.data = null;
      res.json(respons);
      return;
    }
  })
})



module.exports = router;
