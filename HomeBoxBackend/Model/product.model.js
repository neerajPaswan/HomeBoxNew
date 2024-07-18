import mongoose from "mongoose";

const {Schema} = mongoose;

const productShema = new Schema({
  productNo: {type:Number,require:true},
  title: {type:String,require:true},
  price: {type:Number,require:true},
  description: {type:String,require:true},
  category: {type:String,require:true},
  image: {type:String,require:true},
  rating: { rate: {type:Number,require:true}, count:{type:Number,require:true} }
})

const Products = mongoose.model('product',productShema);
export default Products;