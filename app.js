const express = require('express');
const app = express();

//get post put delete

//req.param   -- > https://localhost:8080/products:productId
//req.body    
//req.query   --> https://localhost:8080/search?key=great

app.use((req,res,next)=>{
    console.log(`Current time: ${new Date().toLocaleString()}`);
    next();
})

app.get('/search',(req,res)=>{
    const {key} = req.query;
    console.log(req.query);
    res.send("ok");
})


app.get('/contact',(req,res)=>{
    res.send("here is contact");
})

const products = [
    {id:1,name:"shirt"},
    {id:2,name:"shoes"},
    {id:3,name:"scarfs"}
];

app.get('/products/:productId',(req,res)=>{
    const {productId} = req.params;
    let product = products.find(item=>item.id === +productId);
    console.log("the result product is : ", product);
    res.send(product.name);
    })

app.get('/products',(req,res)=>{
    // res.status(200).send("ok");
    res.json({
        status: 'ok',
        statusCode: 200,
        data: products,
    })
})



app.get('/',(req,res)=>{
    res.send("Home");
})

app.listen(8080,()=>{
    console.log("the server is running on port 8080");
})