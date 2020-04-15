var express = require("express");
var app = express();
var path =  require('path')
var router =  express.Router()
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/public", express.static('public'))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(PORT, function(){
    console.log("App is running on port "+PORT)
});