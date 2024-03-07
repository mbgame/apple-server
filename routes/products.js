const express = require('express');
const router = express.Router();


const products = [
    {id:1,name:"shirt"},
    {id:2,name:"shoes"},
    {id:3,name:"scarfs"}
];

router.get('/products',(req,res)=>{
    // res.status(200).send("ok");
    res.json({
        status: 'ok',
        statusCode: 200,
        data: products,
    })
})

router.post('/products', (req, res) => {
    const { id } = req.body;
    try {
        let product = products.find(item => item.id === +id);

        if (product) {
            res.json({
                status: 'ok',
                statusCode: 200,
                data: product?.name,
            });
        } else {
            res.json({
                status: 'not ok',
                statusCode: 500,
            });
        }
    } catch (err) {
        console.log("error in post products");
        res.status(500).send("error in post products");
    }
});


router.get('/products/:productId',(req,res)=>{
    const {productId} = req.params;
    let product = products.find(item=>item.id === +productId);
    console.log("the result product is : ", product);
    res.send(product.name);
})

module.exports = router;