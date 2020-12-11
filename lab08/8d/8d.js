const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4334;
app.set('views', '/views');
app.set('view engine', 'pug');

app.post('/jsondata', function(req, res) {
    console.log('ll' + req.body.firstname);
    res.render(__dirname + '/views/8d.pug', {
        title: '8d',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
});
app.listen(port, () => {
        console.log('listeniing on http://localhost:' + port);
    })
    // postman input { 
    // "firstname" : "maryia",
    // "lastname" : "ruzava",
    // "email" : "fff@kkk.ll"
    // }