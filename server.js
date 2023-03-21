var express = require("express");
const req = require("express/lib/request");
var app= express()
var port = process.env.port || 3000;


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname +'/public'));

function addNumbers(n1, n2){
    return parseInt(n1) + parseInt(n2); 
}

app.get('/', (req,res)=>{
    res.render('index.html');

});


app.use('/addTwoNumbers', (req,res)=> {
    var n1= req.query.n1;
    var n2= req.query.n2;
    var result= addNumbers(n1,n2);
    res.json({statusCode:200, data:result, message:"Success"});

});

app.listen(port, ()=>{
    console.log("App listens to:" +port)
    
});
