// const express = require("express");
import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/products.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"

const app = express();
dotenv.config();
const PORT = 8000;  

// connection with mongodb database

mongoose.connect(process.env.MONGO)
.then(()=>{console.log('database connected')})
.catch((error)=>{
    console.log(error)
});

app.use(express.json());
app.use(cookieParser()); 
app.use(cors({
    // origin: 'https://homeboxfront.onrender.com', // replace with your frontend URL
    origin:['http://localhost:5173','https://homeboxfront.onrender.com','http://192.168.203.48:5173'], // replace with your frontend URL
    credentials: true,
  }))

  app.use(express.static(path.join("./",  'dist')));

  app.get('*.js', (req, res, next) => {
    res.type('text/javascript');
    next();
  });
  
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("./",  'dist', 'index.html'));
  });

app.use('/auth',authRoutes);
app.use('/product',productRoutes)


//specifying port for server
app.listen(PORT,()=>{
    console.log("hello backend");
});