import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import ProductRoutes from'./routes/product.routes.js'


dotenv.config()

const app = express();


app.use(express.json())

app.use('/api/products',ProductRoutes)

app.listen(1337,() => {
    console.log('server started at localhost port 1337 helllo')
})

app.get('/',(req,res)=>{
    connectDB();
    res.send('server is ready')
})

