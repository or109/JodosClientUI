var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index3.html');
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

/*
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})*/