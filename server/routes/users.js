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
  let username = req.body.username;
  let password = req.body.password;
  console.log(req.body);
  con.query('INSERT INTO users( username, password) VALUES (?,?)', [username, password], function (err, result, fields) {
    if (err) {
      respons.success = false;
      respons.errore = true;
      respons.message = 'errore:' + err;
      respons.data = null;
      res.json(respons);
    }
    token = jwt.sign({ username: username, password: password, iat: Math.floor(Date.now() / 1000) - 30 }, 'mySecret');
    respons.success = true;
    respons.errore = false;
    respons.message = 'logedin';
    respons.data = token;
    res.json(respons);
  })
})



///////////////login/////////////////////
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





// router.post('/', function (req, res, next) {
//   let respons = new httpRespons();
//   let username = req.body.username;
//   let password = req.body.password;

//   con.query(`SELECT * FROM users WHERE username = ?`, [username], function (err, result, fields) {
//     if (err) {
//       respons.success = false;
//       respons.errore = true;
//       respons.message = 'errore:' + err;
//       respons.data = null;
//       res.json(respons);
//       return
//     }
//     if (result.length > 0) {
//       const token = jwt.sign({ username }, jwtKey, {
//         algorithm: 'HS256',
//         expiresIn: jwtExpirySeconds
//       })
//       console.log('token:', token)

//       res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
//       respons.success = true;
//       respons.errore = false;
//       respons.message = 'create jwt';
//       respons.data = result;
//       res.json(respons);
//     }else{
//       respons.success = false;
//       respons.errore = true;
//       respons.message = 'not exist';
//       respons.data = result;
//       return res.status(401).json(respons);
//     }

//   });
// });




module.exports = router;
