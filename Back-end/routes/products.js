const express = require('express')
const Products = require('../models/productsModel.js')

const router = express.Router();

//create a new produt
router.post('/', async (req, res) => {
    try {
        const product = await Products.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

// get all products
router.get('/', async(req, res) => {
    try {
        const products = await Products.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

// get a specific product
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

// update a product
router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `cannt find any product with this id ${id}`})
        }
        const updatedProduct = await Products.findById(id);
        res.status(201).json(updatedProduct)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product
router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `cannt find any product with this id ${id}`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;