var express = require("express");
var router = express.Router();
var path = require("path");

  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  router.get('/shop', function(req, res) {
    res.sendFile(path.join(__dirname, "../views/shop.html"));
  });

  router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
  });

  router.post('/contact', function(req, res) {
    console.log(req);
    res.redirect('/contact');
  });

  router.use('/shopScript', express.static(path.join(__dirname, "../config/shop.js")));
  router.use('/images', express.static(path.join(__dirname, "../public/images")));
  router.use('/css', express.static(path.join(__dirname, "../public/css")));
  router.use('/js', express.static(path.join(__dirname, "../public/js")));

module.exports = router;