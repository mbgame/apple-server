const express = require('express');
const app = express();

//get post put delete

app.use((req,res,next)=>{
    console.log(`Current time: ${new Date().toLocaleString()}`);
    next();
})


app.get('/contact',(req,res)=>{
    res.send("here is contact");
})

const products = [
    {name:"shirt"},
    {name:"shoes"},
    {name:"scarfs"}
];

app.get('/products',(req,res)=>{
    // res.status(200).json("ok");
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