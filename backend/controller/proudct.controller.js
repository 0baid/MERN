import Product from "../models/Product.model.js"
import mongoose from "mongoose"

export const getProducts = async(req,res) => {
    const {id} = req.params
    console.log(id)
    try {
        const getProduct = await Product.findById(id)
        res.status(200).json({success:true,message:'product fetched successfully',data:getProduct})
    } catch (error) {
        res.status(500).json({success:false,message:error.body})
    }
}

export const createProduct = async (req,res) => {
    const product = req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json(({message:'please fill all fields',success:false}))
    }
    const newProduct = Product(product)

    try {
        await newProduct.save();
        res.status(201).json({message:'product created successfully',data:newProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error.message})
    }
}

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success:true,data:products})
    } catch (error) {
        console.log("error in fetching products",error.message)
        res.status(500).json({success:false,message :"server error"})
    }
}

export const updateProduct = async (req,res) => {
    const {id} = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid id"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product ,{new: true})
        res.status(200).json({message:success,data:updatedProduct})
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})
    }
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params
    console.log(id)
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Product Deleted Successfully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.body})
    }
}