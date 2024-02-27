var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index', {
        people: [
            {name: 'dave'},
            {name: 'jerry'}
    ]    
    });
});

app.listen(8000, function(){
    console.log("heard on 8000")
});