var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
if(rq.headers['x-forwarded-proto'] === 'http'){
next();
}
else{
	res.redirect('http://' + req.hostname + rq.url);
}
});
app.use(express.static('public'));

app.listen(PORT,function(){
	console.log("Express server is up on port " + PORT);
});
