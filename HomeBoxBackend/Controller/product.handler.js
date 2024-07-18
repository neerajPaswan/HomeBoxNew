import Products from "../Model/product.model.js";

export const addProductSingle = async (req,res)=>{
    try{
        const productDetail= req.body;
        const newProduct = new Products({...productDetail});
        await newProduct.save();
        res.status(201).json({message:"data created"});
    }catch(error){
        console.log(error)
    }
}

export const getAllProduct = async (req,res)=>{
    try{
        const products = await Products.find({});
        res.send(products).status(200);
      

    }catch(error){
        console.log(error);
    }
}


export const categoryItemHandler = async (req,res)=>{
    
    try{
        let queryObj = req.query;
        let type = queryObj.cat.toLowerCase();
       const categories = ["mobiles","fashione","laptops","electronics","jewelery","home","books",'beauty',"watches" ];
       console.log(type);
    let isExist = categories.includes(type);
    if(!isExist){
       return res.status(409)
                 .json({message:"this category does not exist"});
    } 
        const products = await Products.find({category:type})
        
        res.send(products);
        res.status(200);
    }catch(error){
        console.log(error)
        res.send()
        res.status(500)

    }
}