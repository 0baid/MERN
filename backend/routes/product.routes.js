import express from "express";
import Product from '../models/Product.model.js'
import mongoose from "mongoose";
import { createProduct, getAllProducts, getProducts,deleteProduct,updateProduct } from "../controller/proudct.controller.js";
const router = express.Router();


router.delete("/:id", deleteProduct)

router.get("/:id", getProducts)

router.post("/", createProduct)

router.get("/", getAllProducts)

router.put("/:id",updateProduct)


export default router