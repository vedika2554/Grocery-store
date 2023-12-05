import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import path from "path";
const _dirname = path.resolve();

import mongoose from "mongoose";
import Product from './models/Product.js'
import User from './models/User.js'
import Order from "./models/Order.js";


const app = express();
app.use(express.json());



const connectMongoDB = async() =>{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if(connection){
        console.log('connected to mangodb');
    }
}
connectMongoDB();


app.post('/product', async(req, res)=>{

   const { name, price, description, image } = req.body;
   

  const product = new Product({
    name: name,
    price: price,
    description: description,
    image: image
  });

  try{

  const savedProduct = await product.save();

    res.json({
        success: true,
        data: savedProduct,
        message: 'product added successfully'
    })
}catch(e){
    res.json({
        success:false,
        message: e.message
    })
}
})





app.get('/products', async(req, res)=>{

const products = await Product.find();

   res.json({
    success: true,
    data: products,
    message: 'product success'
   }) 
})

app.get('/products/:id', async(req, res)=>{
    const {id} = req.params;

    const product = await Product.findOne({_id: id});
    res.json({
        success: true,
        data: product,
        message: 'product retrive successfully'
    })
})




app.delete('/product/:id', async (req, res)=>{
    const {id} = req.params;

    const product = await Product.deleteOne({_id: id});
    res.json({
        success: true,
        data: product,
        message: 'product deleted successfully'
    })

})
app.put('/product/:id', async (req, res)=>{
    const {id} = req.params;
    const { name, price, description, image } = req.body;

    await Product.updateOne({_id: id}, {$set:{
        name: name,
        price: price,
        description: description,
        image: image
 }});
 const updatedProduct = await Product.findOne({_id: id});

 res.json({
    success: true,
    data: updatedProduct,
    message: 'product update successfully'
 })
})

app.post('/signup',async(req,res)=>{
    const {name, email, mobile, password} = req.body

    const user = new User({
        name: name,
        email: email,
        mobile: mobile,
        password: password
      });
      try{
        const savedUser = await user.save();

        res.json({
            success: true,
            data: savedUser,
            message: 'user added successfully'
        })
      }
      catch(e){
        res.json({
            success:false,
            message: e.message
        })
      }
})
app.post('/login',async(req,res)=>{
    const { email, password} = req.body

   const user = await User.findOne({email: email, password: password});
   if(user){
    res.json({
        success: true,
        data: user,
        message: 'user login successfully'
    })
   }
   else
   {
    res.json({
        success: false,
         message: 'invalid email or password'
   })
}
})

app.post('/order', async(req, res)=>{
    const {product, user, quantity , shippingAddress} = req.body;

    const order = new Order ({
        product: product,
        user: user,
        quantity: quantity,
        shippingAddress: shippingAddress 
    });
    try{
    const savedOrder = await order.save();

    res.json({
        success:true,
        data: savedOrder,
        message: 'order placed successfully'

    })}
    catch(e){
        res.json({
            success:false,
            message: e.message
        })
        
    }
})
app.get('/orders', async(req, res)=>{
    const {id} = req.query;
    
    const orders = await Order.find({user: id}).populate('user product')

    res.json({
        success:true,
        data: orders,
        message: 'orders retrive successfully'
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(_dirname, '..',client, 'build')));

    app.get('*', (req, res)=>{
        res.sendFile(path.join(_dirname, '..', 'client', 'build', 'index.html'))
    });
}


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})