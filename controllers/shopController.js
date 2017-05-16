var express = require("express");
var router = express.Router();
var path = require("path");
var nodemailer = require("nodemailer");

// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/index.html"));
// });
router.get('/', function(req, res) {
    res.render('index');
})

// router.get('/shop', function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/shop.html"));
// });

router.get('/shop', function(req, res) {
    res.render('shop');
})

// router.get('/contact', function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/contact.html"));
// });

router.get('/contact', function(req, res) {
    res.render('contact');
})

router.post('/contact/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({

        service: 'Gmail',
        auth: {
            user: 'codeemailtester@gmail.com',
            pass: 'password12345'
        }
    });

    var mailOptions = {

        from: 'Website User <codeemailtester@gmail.com>',
        to: 'jaredneutel@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission with the folowing details...Name: ' + req.body.first_name + ' ' + req.body.last_name + ' Email: ' + req.body.email + ' Phone Number: ' + req.body.phone + ' Address: ' + req.body.address + ', ' + req.body.city + ', ' + req.body.state + ', ' + req.body.zip + ' Interested in being a rep: ' + req.body.rep + ' Message: ' + req.body.comment,
        html: '<p>You got a new submission with the following details</p><ul><li>Name: ' + req.body.first_name + ' ' + req.body.last_name + '</li><li>Email: ' + req.body.email + '</li><li>Phone Number: ' + req.body.phone + '</li><li>Address: ' + req.body.address + ', ' + req.body.city + ', ' + req.body.state + ', ' + req.body.zip + '</li><li>Interested in being a rep: ' + req.body.rep + '</li><li>Message: ' + req.body.comment + '</li></ul>'

    };

    transporter.sendMail(mailOptions, function(error, info) {

        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent: ' + info.response);
            res.redirect('/');

        }
    })
});

// router.use('/shopScript', express.static(path.join(__dirname, "../config/shop.js")));
// router.use('/images', express.static(path.join(__dirname, "../public/images")));
// router.use('/css', express.static(path.join(__dirname, "../public/css")));
// router.use('/js', express.static(path.join(__dirname, "../public/js")));
router.use('/', express.static('public'));

module.exports = router;
