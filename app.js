const express = require('express');
var bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const productsRoutes = require('./routes/products');
app.use(productsRoutes);

//get post put delete

//req.param   -- > https://localhost:8080/products:productId
//req.body    body-parser
//req.query   --> https://localhost:8080/search?key=great

app.use((req,res,next)=>{
    console.log(`Current time: ${new Date().toLocaleString()}`);
    next();
})



app.get('/search',(req,res)=>{
    const {key} = req.query;
    console.log(key);
    res.send(key);
})


app.get('/contact',(req,res)=>{
    res.send("here is contact");
})


app.get('/',(req,res)=>{
    res.send("Home");
})

app.listen(8080,()=>{
    console.log("the server is running on port 8080");
})