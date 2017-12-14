var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("client/build"));
app.use(require(".controllers/index"));


app.get('/', function(req, res){
  res.sendFile(__dirname + "client/build/index.html");
});

app.listen(3000, function(){
  console.log('Listening on ' + this.address().port);
});
