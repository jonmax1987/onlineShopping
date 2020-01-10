var express = require('express');
var con = require('../modules/DB').getPool();
var router = express.Router();
var httpRespons = require('../modules/httpResponse');
const jwt = require('jsonwebtoken');



function cheeckJWT(token) {
    jwt.verify(token, 'mySecret', function (err, decoded) {
        if (err) {
            console.log(err);
            throw err;
        };
        console.log(decoded);
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* GET category listing. */
router.get('/category/:jwt', function (req, res, next) {
    let respons = new httpRespons();
    var token = req.query.token;
    console.log('token:', token) // bar
    cheeckJWT(token)
    con.query(`SELECT * FROM category`, function (err, result) {
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
        respons.message = 'category-list';
        respons.data = result;
        res.json(respons);

    });
});


router.post('/category', (req, res) => {
    let respons = new httpRespons();
    let name = req.body.name;
    con.query(`INSERT INTO category(name) VALUES(?)`, [name], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'category added successfuly';
        respons.data = result;
        res.json(respons);
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* GET all products listing by free search  */
router.get('/get_all_product/:token', function (req, res, next) {
    let respons = new httpRespons();
    let token = req.query.token;
    cheeckJWT(token);
    con.query(`SELECT * FROM product`, function (err, result, fields) {
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
        respons.message = 'products-list';
        respons.data = result;
        res.json(respons);
    })
});

/* GET products listing. */
router.get('/get_product/:id_category', function (req, res, next) {
    let respons = new httpRespons();
    let id_category = req.query.id_category;
    var token = req.query.token;
    cheeckJWT(token)
    con.query(`SELECT * FROM product WHERE id_category = ?`, [id_category], function (err, result, fields) {
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
        respons.message = 'products-list';
        respons.data = result;
        res.json(respons);
    })
});


router.post('/add_product', (req, res) => {
    let respons = new httpRespons();
    let name = req.body.name;
    let id_category = req.body.id_category
    let price = req.body.price
    let img = req.body.img
    var token = req.body.token;
    console.log('token:', token) 
    cheeckJWT(token)
    con.query(`INSERT INTO product( name, id_category, price, img) VALUES (?,?,?,?)`, [name, id_category, price, img], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'product added succefuly';
        respons.data = result;
        res.json(respons);
    })
})


router.put('/product', (req, res) => {
    let respons = new httpRespons();
    let name = req.body.name;
    let id_category = req.body.id_category;
    let price = req.body.price;
    let img = req.body.img;
    let id = req.body.id;
    var token = req.body.token;
    console.log('token:', token) // bar
    cheeckJWT(token)
    con.query(`UPDATE product SET name=?,id_category=?,price=?,img=? WHERE id =?`, [name, id_category, price, img, id], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'product added succefuly';
        respons.data = result;
        res.json(respons);
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* GET cart  */
router.get('/cart/:id_user', function (req, res, next) {
    let respons = new httpRespons();
    let id_user = req.query.id_user;
    let create_date = new Date;
    var token = req.query.token;
    console.log('token:', token)
    cheeckJWT(token)
    con.query(`SELECT * FROM cart WHERE id_user = ?`, [id_user], function (err, result, fields) {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
            return
        }
        if (!result.length > 0) {
            con.query(`INSERT INTO cart(id_user, create_date) VALUES (?,?)`, [id_user, create_date], function (err, cart) {
                if (err) {
                    respons.success = false;
                    respons.errore = true;
                    respons.message = 'errore:' + err;
                    respons.data = null;
                    res.json(respons);
                    return
                }
                con.query(`SELECT * FROM cart WHERE id_user = ?`, [id_user], function (err, new_cart) {
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
                    respons.message = 'create-cart-successfully';
                    respons.data = new_cart;
                    res.json(respons);
                })
            })
        } else {
            respons.success = true;
            respons.errore = false;
            respons.message = 'cart exist';
            respons.data = result;
            res.json(respons);
        }
    })
});



router.post('/cart', (req, res) => {
    let respons = new httpRespons();
    let id_user = req.body.id_user;
    let create_date = req.body.create_date
    var token = req.body.token;
    console.log('token:', token) // bar
    cheeckJWT(token)
    con.query(`INSERT INTO cart( id_user, create_date) VALUES (?,?)`, [id_user, create_date], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'cart added succefuly';
        respons.data = result;
        res.json(respons);
    })
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////* GET Item in the cart *////////////////////
router.get('/item/:id_cart', function (req, res, next) {
    let respons = new httpRespons();
    let id_cart = req.query.id_cart;
    var token = req.query.token;
    console.log('token:', token)
    cheeckJWT(token)
    con.query(`SELECT * FROM product_cart LEFT JOIN product ON product_cart.id_product = product.id WHERE id_cart = ? `, [id_cart], function (err, result, fields) {
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
        respons.message = 'item-list';
        respons.data = result;
        res.json(respons);
    })
});


////////////////////add product into cart///////////////////////
router.post('/item', (req, res) => {
    let respons = new httpRespons();
    let id_product = req.body.id_product;
    let count = req.body.count
    let price = req.body.price
    let id_cart = req.body.id_cart
    var token = req.body.token;
    console.log('token:', token)
    cheeckJWT(token)

    con.query(`INSERT INTO product_cart( id_product,count,price,id_cart ) VALUES(?,?,?,?)`, [id_product, count, price, id_cart], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        con.query(`SELECT * FROM product_cart`, function (err, result, fields) {
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
            respons.message = 'item added successfuly!!!';
            respons.data = result;
            res.json(respons);
        })
    })
})

///////////////////delete one product from cart////////////////
router.delete('/item', function (req, res, next) {
    let respons = new httpRespons();
    id_product = req.body.id_product;
    var token = req.body.token;
    console.log('token:', token)
    cheeckJWT(token)
    con.query(`DELETE FROM product_cart WHERE id_product=?`, [id_product], function (err, result, fields) {
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
        respons.message = 'item deleted!!!';
        respons.data = result;
        res.json(respons);
    })
});

/////////////////delete all products from the cart/////////////////////////
router.delete('/allitem', function (req, res, next) {
    let respons = new httpRespons();
    let id_cart = req.body.id_cart;
    console.log(id_cart);
    var token = req.body.token;
    console.log('token:', token);
    cheeckJWT(token);
    con.query(`DELETE FROM product_cart WHERE id_cart=?`, [id_cart], function (err, result, fields) {
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
        respons.message = 'All item deleted!!!';
        respons.data = result;
        res.json(respons);
    })
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* GET order  */
router.get('/order', function (req, res, next) {
    let respons = new httpRespons();
    var token = req.query.token;
    console.log('token:', token)
    cheeckJWT(token)
    con.query(`SELECT * FROM order_`, function (err, result, fields) {
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
        respons.message = 'order-list';
        respons.data = result;
        res.json(respons);
    })
});

router.post('/order', (req, res) => {
    let respons = new httpRespons();
    let id_user = req.body.id_user;
    let id_cart = req.body.id_cart
    let final_price = req.body.final_price
    let city = req.body.city
    let street = req.body.street
    let deliveri_data = req.body.deliveri_data
    let digits = req.body.digits;
    var token = req.body.token;
    console.log('token:', token);
    cheeckJWT(token);
    con.query(`INSERT INTO order_( id_user, id_cart, final_price, city, street, delivery_date, Order_date,4_digits) VALUES(?,?,?,?,?,?,?,?,?)`, [id_user, id_cart, final_price, city, street, deliveri_data, digits], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = '';
        respons.data = result;
        res.json(respons);
    })
})



router.put('/order', (req, res) => {
    let respons = new httpRespons();
    let id_user = req.body.id_user;
    let id_cart = req.body.id_cart;
    let final_price = req.body.final_price;
    let city = req.body.city;
    let street = req.body.street;
    let delivery_date = req.body.delivery_date;
    let Order_date = req.body.Order_date;
    let digits = req.body.digits;
    let id = req.body.id;
    var token = req.body.token;
    console.log('token:', token);
    cheeckJWT(token);


    con.query(`UPDATE order_ SET id_user=?,id_cart=?,final_price=?,city=?,street=?,delivery_date=?,Order_date=?,4_digits WHERE id =?`, [id_user, id_cart, final_price, city, street, delivery_date, Order_date, digits, id], (err, result) => {
        if (err) {
            respons.success = false;
            respons.errore = true;
            respons.message = 'errore:' + err;
            respons.data = null;
            res.json(respons);
        }
        respons.success = true;
        respons.errore = false;
        respons.message = 'order updated succefuly';
        respons.data = result;
        res.json(respons);
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////




module.exports = router;
